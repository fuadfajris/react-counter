import shoppingIcon from "../../assets/shopping-icon.svg";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <img className={styles.navIcon} src={shoppingIcon} alt="nav icon" />
        <h1 className={styles.navTitle}> Shopping</h1>
      </nav>
    </>
  );
};

export default Navbar;
