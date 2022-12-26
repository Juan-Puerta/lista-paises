import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import { AppContextWrapper } from "./store/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextWrapper>
    <App />
  </AppContextWrapper>
);
