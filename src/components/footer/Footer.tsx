import styles from "./Footer.module.scss";

const Footer = (props: any) => {
  return (
    <div className={styles.footer}>
      <span>Copyright</span>
      <span>&copy;</span>
      <span>{new Date().getFullYear()}</span>
      <span>Regenate</span>
    </div>
  );
};
export default Footer;
