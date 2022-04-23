import styles from "./Header.module.scss";
import { RegensLogo } from "../../assets/svg/icons";

const Header = (props: any) => {
  return (
    <div className={styles.header}>
      <RegensLogo />
      <span className={styles.title}>REGENATE</span>
    </div>
  );
};
export default Header;
