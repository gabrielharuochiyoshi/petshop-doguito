import React from "react";
import imagem from "../assets/img/doguito404.svg";
import "../assets/css/404.css";
import styled from "styled-components";

const ImagemErro = styled.img`
  width: 100%;
  max-width: 25rem;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
`;
const ErroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NotFound = styled.a`
  font-size: var(--fonte-tamanho-naoencontrado-texto);
  margin-bottom: 1rem;
`;

const Pagina404 = () => {
  return (
    <ErroContainer>
      <ImagemErro src={imagem} alt="Ilustração Doguito" />
      <NotFound>Ops, Essa página não existe!</NotFound>
    </ErroContainer>
  );
};

export default Pagina404;
