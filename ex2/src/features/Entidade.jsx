import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Entidade = () => {
  const [contratos, setContratos] = useState([]);
  const { nipc } = useParams();

  useEffect(() => {
    fetch(`http://localhost:16000/contratos`)
      .then((res) => res.json())
      .then((data) => {
        const filteredNipc = data.filter(
          (contrato) => contrato.NIPC_entidade_comunicante === nipc
        );
        setContratos(filteredNipc);
      });
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>NIPC Entidade: {nipc} </h1>
          <h2>Entidade: {contratos[0]?.entidade_comunicante}</h2>
          <h3>Sum: {contratos.length}</h3>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <a href="/" className="btn btn-primary">
            Voltar
          </a>
        </div>
      </div>
      <div className="table-responsive d-flex w-100">
        <table className="table table-striped table-hover vh-100">
          <thead>
            <tr>
              <th>idcontrato</th>
              <th>objectoContrato</th>
              <th>dataCelebracaoContrato</th>
              <th>precoContratual</th>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Entidade;
