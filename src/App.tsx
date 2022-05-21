import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Notification from "components/notification/Notification";
import { GlobalUrls } from "enums/GlobalUrls";
import { RoleEnum } from "enums/role";
import { UserModel } from "models/user";
import CommunityStandards from "pages/communityStandards/CommunityStandards";
import Join from "pages/join/Join";
import Login from "pages/login/Login";
import Step1 from "pages/loginPageSteps/step1/Step1";
import Step2 from "pages/loginPageSteps/step2/Step2";
import Step3 from "pages/loginPageSteps/step3/Step3";
import Step4 from "pages/loginPageSteps/step4/Step4";
import Step5 from "pages/loginPageSteps/step5/Step5";
import PrivacyPolicy from "pages/privacyPolicy/PrivacyPolicy";
import Role from "pages/role/Role";
import User from "pages/user/User";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { RootState } from "redux/store";
import { HttpService } from "services/http.service";
import styles from "./App.module.scss";
import "./scss/style.scss";

function App() {
  const user = useSelector((state: RootState) => state.userReducer.user);

  HttpService.setUserToken(user?.bearerToken);

  const notificationRed = useSelector(
    (state: RootState) => state.notificationReducer
  );

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <Notification
        text={notificationRed.text}
        direction={notificationRed.direction}
        notificationType={notificationRed.type}
        refresh={notificationRed.value}
      />
      <Routes>
        <Route
          path="*"
          element={
            <main className={styles.notFound}>
              <p>There is nothing here!</p>
            </main>
          }
        />
        <Route path={`/${GlobalUrls.login}`} element={<Login />} />
        <Route path={`/${GlobalUrls.register}`} element={<Join />} />

        <Route element={<UserOnboarding user={user} />}>
          <Route path={`/${GlobalUrls.role}`} element={<Role />} />
          <Route path={`/${GlobalUrls.step1}`} element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/communityStandards" element={<CommunityStandards />} />
        </Route>

        <Route element={<Protected user={user} />}>
          <Route
            path={`/${GlobalUrls.home}`}
            element={
              <main className={styles.notFound}>
                <p>Protected</p>
              </main>
            }
          />
        </Route>
      </Routes>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

const UserOnboarding = (props: { user: UserModel }) => {
  const user = props.user;

  if (user?.bearerToken) {
    return <Outlet />;
  }
  return <Navigate to={`/${GlobalUrls.login}`} />;
};

const Protected = (props: { user: UserModel }) => {
  const user = props.user;

  if (user?.bearerToken && RoleEnum.isValid(user?.role)) {
    return <Outlet />;
  }
  return <Navigate to={`/${GlobalUrls.role}`} />;
};

export default App;
