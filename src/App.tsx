import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import CommunityStandards from "pages/communityStandards/CommunityStandards";
import Home from "pages/home/Home";
import Join from "pages/join/Join";
import Login from "pages/login/Login";
import Step1 from "pages/loginPageSteps/step1/Step1";
import Step2 from "pages/loginPageSteps/step2/Step2";
import Step3 from "pages/loginPageSteps/step3/Step3";
import Step4 from "pages/loginPageSteps/step4/Step4";
import Step5 from "pages/loginPageSteps/step5/Step5";
import PrivacyPolicy from "pages/privacyPolicy/PrivacyPolicy";
import User from "pages/user/User";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import "./scss/style.scss";

function App() {
  const user = true;
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <Routes>
        <Route
          path="*"
          element={
            <main className={styles.notFound}>
              <p>There is nothing here!</p>
            </main>
          }
        />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Join />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/communityStandards" element={<CommunityStandards />} />
      </Routes>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
