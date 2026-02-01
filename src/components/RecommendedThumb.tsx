import styles from "./styles/recommended.module.css"
import icons from "../assets/index"
import {BookmarkButton, Circle} from "./index"
import { useCallback } from "react"
import { type Regular } from "../types"

type Props = {
  image: Regular,
  year: number,
  category: "Movie" | "TV Series",
  rating: string,
  title: string
  isBookmarked: boolean,
  width: number
}

function RecommendedThumb({
  image,
  year,
  category,
  rating,
  title,
  isBookmarked,
  width
}: Props) {

  const getImage = useCallback(()=>{
    if (width > 768) return image.large
    if (width > 365 && width < 768) return image.medium

    return image.small
  },[width, image])

  return (
    <div className={styles.recommended__thumbnail}>
      <div className={styles.image__container}>
        <img src={getImage()} alt="Carousel Image" className={styles.thumbnail__image} />
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
