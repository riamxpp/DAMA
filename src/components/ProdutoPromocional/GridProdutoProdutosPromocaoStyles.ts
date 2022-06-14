import styled from "styled-components";
import {
  ContainerProdutosSecundariosInterface,
  FotoPrincipalProdutoInterface,
  FotoProdutoSecundarioInterface,
  FotoUnicaInterface,
  GridProdutosItemInteracaoInterface,
} from "./GridProdutoProdutosPromocaoInterface";

const GridProdutosPromocaoComponent = styled.article`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 350px 1fr;
  font-family: "Roboto", sans-serif;
`;

const ContainerProdutoPrincipal = styled.div`
  height: auto;
  display: flex;
  grid-column: 1/-1;
  grid-row: 1;
  padding: 2rem 2rem 0 2rem;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: -1px 0px 18px 2px rgba(0, 0, 0, 0.28);
    box-shadow: -1px 0px 18px 2px rgba(0, 0, 0, 0.28);
    transition: 0.3s;
  }
`;

const WrapperProdutoFoto = styled.div``;

const FotoPrincipalProduto = styled.div<FotoPrincipalProdutoInterface>`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: 68%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const CarroselFotos = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
`;

const FotoUnica = styled.div<FotoUnicaInterface>`
  width: 3rem;
  height: 3rem;
  margin-top: 2rem;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50% 50%;
  background-color: #e7e7e7;
  border: ${(props) =>
    props.borderColor ? "2px solid #333" : "2px solid transparent"};
  cursor: pointer;
`;

const ContainerInformacoesProduto = styled.div`
  margin-left: 50px;
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

const ContainerProdutosSecundarios = styled.div<ContainerProdutosSecundariosInterface>`
  padding: ${(props) => props.padding};
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: -1px 0px 18px 2px rgba(0, 0, 0, 0.28);
    box-shadow: -1px 0px 18px 2px rgba(0, 0, 0, 0.28);
    transition: 0.3s;
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

const GridProdutosContainerInteracoes = styled.nav`
  display: flex;
`;

const GridProdutosItemInteracao = styled.div<GridProdutosItemInteracaoInterface>`
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#2C5490"};
  border-radius: 50%;
  margin: 67px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export {
  GridProdutosPromocaoComponent,
  ContainerProdutoPrincipal,
  ContainerProdutosSecundarios,
  WrapperProdutoFoto,
  FotoPrincipalProduto,
  CarroselFotos,
  FotoUnica,
  ContainerInformacoesProduto,
  CategoriaProduto,
  GridProdutosNomeProduto,
  GridProdutosPriceProduto,
  GridProdutosPreco,
  GridProdutosListaInfoProduto,
  GridProdutosItemInfoProduto,
  InfoProdutosSecundarios,
  FotoProdutoSecundario,
  GridProdutosContainerInteracoes,
  GridProdutosItemInteracao,
};
