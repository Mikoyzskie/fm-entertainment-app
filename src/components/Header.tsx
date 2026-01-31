import icons from "../assets"
import styles from "./styles/header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <img src={icons.AppLogo} alt="Logo" className={styles.header__logo} />
      <div className={styles.header__tabs}>
        <img src={icons.HomeTabIcon} alt="User" className={styles.tabs__icon} />
        <img src={icons.MoviesTabIcon} alt="User" className={styles.tabs__icon} />
        <img src={icons.TvTabIcon} alt="User" className={styles.tabs__icon} />
        <img src={icons.BookmarkTabIcon} alt="User" className={styles.tabs__icon} />
      </div>
      <img src={icons.UserThumb} alt="User" className={styles.header__user} />
    </header>
  )
}



export default Header
