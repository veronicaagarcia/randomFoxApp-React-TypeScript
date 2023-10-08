import { ImgHTMLAttributes, useEffect, useRef, useState } from "react"

type LazyImgProps = { 
    image:string;
    onLazyLoad?: (img: HTMLImageElement) => void;
}
type ImageNative =  ImgHTMLAttributes<HTMLImageElement>
type Props = LazyImgProps & ImageNative
  
export const RandomFox = ({image, onLazyLoad, ...imgProps}: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [src, setSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')
    const [isLazyLoaded, setIsLazyLoaded] = useState(false);

    useEffect(()=> {

        if (isLazyLoaded) {
            return;
        }

        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting || !node.current) {
                    console.log('cuando no se ve')
                    return;
                }

                setSrc(image)
                observer.disconnect()
                setIsLazyLoaded(true)

                if (typeof onLazyLoad === "function") {
                    onLazyLoad(node.current);
                }
            })
        })
    
        if (node.current){
            observer.observe(node.current)
        }

        return () => {
            observer.disconnect()
        }

    }, [image, onLazyLoad, isLazyLoaded])

    
    return <img 
    ref={node} 
    src={src}
    {...imgProps}
    />
}