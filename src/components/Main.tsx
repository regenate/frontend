import Login from "../pages/login/Login";
import Join from "../pages/join/Join";
import Logout from "../pages/logout/Logout";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        {/* <Login /> */}
        <Join />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Main;
