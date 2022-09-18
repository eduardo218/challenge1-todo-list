import styles from './Header.module.scss'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <img src={Logo} />
    </header>
  )
}

export default Header