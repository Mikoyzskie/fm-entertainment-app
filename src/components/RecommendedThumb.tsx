import styles from "./styles/recommended.module.css"
import icons from "../assets/index"
import {BookmarkButton, Circle} from "./index"

type Props = {
  image: string,
  year: number,
  category: "Movie" | "TV Series",
  rating: string,
  title: string
  isBookmarked: boolean
}

function RecommendedThumb({
  image,
  year,
  category,
  rating,
  title,
  isBookmarked
}: Props) {
  return (
    <div className={styles.recommended__thumbnail}>
      <div className={styles.image__container}>
        <img src={image} alt="Carousel Image" className={styles.thumbnail__image} />
        <BookmarkButton bookmarked={isBookmarked}/>
      </div>
      <div className={styles.thumbnail__details }>
        {year}
        <Circle/>
        <img src={icons.CategoryTV} alt="Category TV" />
        {category}
        <Circle/>
        {rating}
      </div>
      <span className={styles.thumbnail__title}>{title}</span>
    </div>
  )
}

export default RecommendedThumb
