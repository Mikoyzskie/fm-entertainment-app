import styles from "./styles/carouselthumb.module.css"

type Props = {
  src: string;
}

function CarouselThumb({src}:Props) {
  return (
    <div className={styles.carousel}>
      <img src={src} alt="Carousel Image" className={styles.carousel__image}/>
      
    </div>
  )
}

export default CarouselThumb
