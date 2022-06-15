import React from "react";
import ContDownPromocional from "./ContDownPromocional";
import GridProdutoProdutosPromocao from "./ProdutoPrincipal";
import {
  ContainerSeguraInformacoes,
  ProdutoPromocionalComponent,
} from "./ProdutoPromocionalStyle";
import ProdutoSecundario from "./ProdutoSecundario";
const smartwatchAzul = require("../../assents/smartwatch-azul.jpg");
const leptop = require("../../assents/notebook-spcetre.jpg");

const ProdutoPromocional = () => {
  return (
    <ProdutoPromocionalComponent>
      <ContainerSeguraInformacoes>
        <ContDownPromocional></ContDownPromocional>
        <GridProdutoProdutosPromocao></GridProdutoProdutosPromocao>
        <ProdutoSecundario
          nome="Apple watch sport blue"
          categoria="Watch"
          preco="$ 250.00"
          foto={smartwatchAzul}
          gridRow="3"
        ></ProdutoSecundario>
        <ProdutoSecundario
          nome="HC Spectre x360 - 15t"
          categoria="Laptop"
          preco="$ 250.00"
          foto={leptop}
          gridRow="4"
        ></ProdutoSecundario>
      </ContainerSeguraInformacoes>
    </ProdutoPromocionalComponent>
  );
};

export default ProdutoPromocional;
