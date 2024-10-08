import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter } from "react-router-dom";
import { GeneralContextProvider } from "./contexts/GeneralContextProvider.jsx";
import AuthenticationContextProvider from "./contexts/AuthenticationContextProvider.jsx";
import { SocketContextProvider } from "./contexts/SocketContextProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationContextProvider>
        <SocketContextProvider>
          <GeneralContextProvider>
            <App />
          </GeneralContextProvider>
        </SocketContextProvider>
      </AuthenticationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
