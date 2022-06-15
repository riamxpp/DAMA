import styled from "styled-components";
import {
  ContainerProdutosSecundariosInterface,
  FotoProdutoSecundarioInterface,
} from "./ProdutoSecundarioInterface";

const ContainerProdutosSecundarios = styled.div<ContainerProdutosSecundariosInterface>`
  padding: ${(props) => props.padding};
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: -1px 0px 18px 2px rgba(0, 0, 0, 0.28);
    box-shadow: -1px 0px 18px 2px rgba(0, 0, 0, 0.28);
    transition: 0.3s;
  }
  @media (max-width: 800px) {
    grid-column: 1;
    grid-row: ${(props) => props.gridRow};
    width: 300px;
  }
`;

const InfoProdutosSecundarios = styled.p`
  font-size: 0.9rem;
  line-height: 1.3;
`;

const FotoProdutoSecundario = styled.div<FotoProdutoSecundarioInterface>`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50% 50%;
`;

const CategoriaProduto = styled.a`
  display: block;
  color: #0046cc;
  cursor: pointer;
`;

const GridProdutosNomeProduto = styled.span`
  display: block;
  font-weight: bold;
  margin: 5px 0;
`;

const GridProdutosPriceProduto = styled.span`
  text-transform: uppercase;
`;

const GridProdutosPreco = styled.span`
  color: #f5c616;
  font-weight: bold;
`;

const GridProdutosListaInfoProduto = styled.ul`
  margin: 5px 0 0 20px;
  line-height: 1.5;
`;

const GridProdutosItemInfoProduto = styled.li``;

export {
  ContainerProdutosSecundarios,
  InfoProdutosSecundarios,
  FotoProdutoSecundario,
  CategoriaProduto,
  GridProdutosNomeProduto,
  GridProdutosPriceProduto,
  GridProdutosPreco,
  GridProdutosListaInfoProduto,
  GridProdutosItemInfoProduto,
};
