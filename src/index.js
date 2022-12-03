import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // точка входа нашего приложения
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* должен быть сверху нашего приложения, чтобы сделать роутинг*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
