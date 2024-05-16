import React from "react";
import { useState, useEffect } from "react";

const Public = () => {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:16000/contratos")
      .then((res) => res.json())
      .then((data) => {
        // just set data as first 10 elements
        // data = data.slice(0, 10);
        setContratos(data);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Contratos</h2>
      <div className="table-responsive d-flex w-100">
        <table className="table table-striped table-hover vh-100">
          <thead>
            <tr>
              <th>idcontrato</th>
              <th>objectoContrato</th>
              <th>dataCelebracaoContrato</th>
              <th>precoContratual</th>
              <th>NIPC_entidade_comunicante</th>
              <th>entidade_comunicante</th>
            </tr>
          </thead>
          <tbody>
            {contratos?.map((contrato) => {
              return (
                <tr key={contrato["_id"]}>
                  <td>
                    <a href={"/" + contrato["_id"]}>{contrato["_id"]}</a>
                  </td>
                  <td>{contrato["objectoContrato"]}</td>
                  <td>{contrato["dataCelebracaoContrato"]}</td>
                  <td>{contrato["precoContratual"]}</td>
                  <td>
                    <a
                      href={
                        "/entidades/" + contrato["NIPC_entidade_comunicante"]
                      }
                    >
                      {contrato["NIPC_entidade_comunicante"]}
                    </a>
                  </td>
                  <td>{contrato["entidade_comunicante"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Public;
