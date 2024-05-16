import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Contrato = () => {
  const { id } = useParams();

  const [contrato, setContrato] = useState({});

  useEffect(() => {
    fetch(`http://localhost:16000/contratos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setContrato(data);
      });
  }, [id]);

  return (
    <div className="container">
      <h1>Contrato</h1>
      <div className="card p-3">
        <div className="card-title">
          <h5>Número do Contrato: {contrato["_id"]}</h5>
        </div>
        <div className="card-body">
          <p>
            <strong>nAnuncio: {contrato["nAnuncio"]}</strong>
          </p>
          <p>
            <strong>tipoProcedimento: {contrato["tipoprocedimento"]}</strong>
          </p>
          <p>
            <strong>objectoContrato: {contrato["objectoContrato"]}</strong>
          </p>
          <p>
            <strong>dataPublicacao: {contrato["dataPublicacao"]}</strong>
          </p>
          <p>
            <strong>
              dataCelebracaoContrato: {contrato["dataCelebracaoContrato"]}
            </strong>
          </p>
          <p>
            <strong>precoContratual: {contrato["precoContratual"]}</strong>
          </p>
          <p>
            <strong>prazoExecucao: {contrato["prazoExecucao"]}</strong>
          </p>
          <p>
            <strong>
              NIPC_entidade_comunicante: {contrato["NIPC_entidade_comunicante"]}
            </strong>
          </p>
          <p>
            <strong>
              entidade_comunicante: {contrato["entidade_comunicante"]}
            </strong>
          </p>
          <p>
            <strong>fundamentacao: {contrato["fundamentacao"]}</strong>
          </p>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <a href="/" className="btn btn-primary w-100  m-2">
          Voltar
        </a>
      </div>
    </div>
  );
};

export default Contrato;
