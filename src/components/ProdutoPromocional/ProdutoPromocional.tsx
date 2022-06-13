import React from "react";
import ContDownPromocional from "./ContDownPromocional";
import GridProdutoProdutosPromocao from "./GridProdutoProdutosPromocao";
import {
  ContainerSeguraInformacoes,
  ProdutoPromocionalComponent,
} from "./ProdutoPromocionalStyle";

const ProdutoPromocional = () => {
  return (
    <ProdutoPromocionalComponent>
      <ContainerSeguraInformacoes>
        <ContDownPromocional></ContDownPromocional>
        <GridProdutoProdutosPromocao></GridProdutoProdutosPromocao>
      </ContainerSeguraInformacoes>
    </ProdutoPromocionalComponent>
  );
};

export default ProdutoPromocional;
