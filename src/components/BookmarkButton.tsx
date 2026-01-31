import styles from "./styles/bookmark-button.module.css"
import icons from "../assets"

function BookmarkButton() {
  return (
    <div className={styles.bookmark__button}>
       <img src={icons.BookEmpty} alt="Bookmark Icon" />
      <BookmarkButton />
    </div>
  )
}

export default BookmarkButton
