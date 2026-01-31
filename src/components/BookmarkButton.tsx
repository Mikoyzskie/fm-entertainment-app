import { useState } from "react"
import styles from "./styles/bookmark-button.module.css"
import icons from "../assets"

type Props = {
  bookmarked: boolean
}

function BookmarkButton({bookmarked}:Props) {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(bookmarked);

  // const handleOnclick = useCallback(()=>{
  //   setIsBookmarked(!isBookmarked)
  // },[])

  return (
    <button className={styles.bookmark__button} onClick={() => setIsBookmarked(!isBookmarked)}>
       {
        isBookmarked
        ? <img src={icons.BookFull} alt="Bookmark Icon" />
        : <img src={icons.BookEmpty} alt="Bookmark Icon" />
       }
    </button>
  )
}

export default BookmarkButton
