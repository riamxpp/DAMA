import React from "react";
import { ProdutoSecundarioPropsInterface } from "./ProdutoSecundarioInterface";
import {
  CategoriaProduto,
  ContainerProdutosSecundarios,
  FotoProdutoSecundario,
  GridProdutosNomeProduto,
  GridProdutosPreco,
  GridProdutosPriceProduto,
  InfoProdutosSecundarios,
} from "./ProdutoSecundarioStyles";

const ProdutoSecundario: React.FC<ProdutoSecundarioPropsInterface> = ({
  nome,
  categoria,
  foto,
  preco,
  gridRow,
}) => {
  return (
    <ContainerProdutosSecundarios
      gridRow={gridRow}
      padding="2rem 2rem 1rem 1rem"
    >
      <CategoriaProduto>{categoria}</CategoriaProduto>
      <GridProdutosNomeProduto>{nome}</GridProdutosNomeProduto>
      <GridProdutosPriceProduto>price: </GridProdutosPriceProduto>
      <GridProdutosPreco>{preco}</GridProdutosPreco>
      <FotoProdutoSecundario backgroundImg={foto}></FotoProdutoSecundario>
      <InfoProdutosSecundarios>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </InfoProdutosSecundarios>
    </ContainerProdutosSecundarios>
  );
};

export default ProdutoSecundario;
