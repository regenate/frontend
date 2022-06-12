import SideNavigation from "components/sideNavigation/SideNavigation";
import { BookingUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styles from "./Booking.module.scss";
import BookingMain from "./bookingMain/BookingMain";

const BookingModule = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.bookingModule}>
      <div className={styles.sideNav}>
        <SideNavigation />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path={`/${BookingUrls.base}`} element={<BookingMain />} />
        </Routes>
      </div>
    </div>
  );
};

export default BookingModule;
