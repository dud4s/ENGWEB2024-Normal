import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./features/Public";
import Contrato from "./features/Contrato";
import Entidade from "./features/Entidade";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Public />} />
          <Route path=":id" element={<Contrato />} />o
          <Route path="entidades/:nipc" element={<Entidade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
