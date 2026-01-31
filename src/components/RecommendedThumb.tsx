import styles from "./styles/recommended.module.css"
// import BookmarkButton from "./BookmarkButton"

type Props = {
  src: string;
}

function RecommendedThumb({ src }: Props) {
  return (
    <div className={styles.recommended__thumbnail}>
      <div className={styles.image__container}>
        <img src={src} alt="Carousel Image" className={styles.thumbnail__image} />
        {/* <BookmarkButton/> */}
      </div>
    </div>
  )
}

export default RecommendedThumb
