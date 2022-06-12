import { useTranslation } from "react-i18next";
import styles from "./BookingMain.module.scss";

const BookingMain = () => {
  const { t } = useTranslation();

  return <div className={styles.bookingMain}>booking html code comes here</div>;
};

export default BookingMain;
