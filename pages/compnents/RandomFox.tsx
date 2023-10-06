type Props = {image:string}
  
  
export const RandomFox = ({image}: Props): JSX.Element => {
    
    return <img width={350} height="auto" className="rounded" src={image}/>
}