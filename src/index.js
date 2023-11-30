import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Header from "./components/Header"
import projectImg from "./assets/img/project.png"
import userImg from "./assets/img/user.png"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <App />

    </BrowserRouter>



  </React.StrictMode>
);
