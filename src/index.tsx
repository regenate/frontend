import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";
import { persistStore } from "reduxjs-toolkit-persist";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import App from "./App";
import "./i18n";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback="Loading...">
            <App />
          </Suspense>
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
