import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-dark">
          <h2 className="text-white text-center p-2">Engenharia Web 2024</h2>
          <h5 className="text-white text-center p-2">Exercício 2</h5>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
