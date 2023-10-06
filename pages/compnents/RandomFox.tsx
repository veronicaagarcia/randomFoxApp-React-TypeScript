const random = () => Math.floor(Math.random() * 123) + 1;
  
  
export const RandomFox = (): JSX.Element => {
    const image: string = `https://randomfox.ca/images/${random()}.jpg`
    return <img width={350} height="auto" className="rounded" src={image}/>
}