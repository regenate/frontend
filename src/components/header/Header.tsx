import styles from "./Header.module.scss";
import { RegensLogo } from "../../assets/svg/icons";
import { Link } from "react-router-dom";

const Header = (props: any) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <RegensLogo />
        <span className={styles.title}>REGENATE</span>
      </Link>
    </div>
  );
};
export default Header;
