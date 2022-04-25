import React from "react";
import "./scss/style.scss";
import styles from "./App.module.scss";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import User from "./pages/user/User";
import { Routes, Route } from "react-router-dom";

function App() {
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
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Join />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
