import { Link } from "react-router-dom";
import styles from './Header.module.css'
import logo from '../img/Roland.png'

function Header() {
    return (      
      <nav class={styles.header}>
        <Link to="/">
          <img src={logo} alt="Costs" className={styles.Img}/>
        </Link>
        <ul className={styles.List}>
          <li className={styles.Item}>
            <Link to="/Sobre" className={styles.Link}>Sobre</Link>
          </li>
          <li className={styles.Item}>
            <Link to="/" className={styles.Link}>Pagina Principal</Link>
          </li>
          <li className={styles.Item}>
            <Link to="/Professor" className={styles.Link}>Professor</Link>
          </li>
          <li className={styles.Item}>
            <Link to="/Igreja" className={styles.Link}>Igreja</Link>
          </li>
        </ul>
        <ul className={styles.List}>
          <li className={styles.Item}>
            <Link to="/Login" className={styles.List}>Login</Link>
          </li>
          <li className={styles.Item}>
            <Link to="/Signup" className={styles.List}>Signup</Link>
          </li>
        </ul>              
      </nav>
    );
  }
  export default Header;