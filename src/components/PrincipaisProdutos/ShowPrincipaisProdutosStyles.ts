import styled from "styled-components";
import { colors } from "../../colors";
import {
  ButtonFotoAtualInterface,
  FotoProdutoPrincipalInterface,
} from "./ShowPrincipaisProdutosInterface";

const ShowProdutosComponente = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
`;

const ProdutosPrincipaisProdutos = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const WrapperFotosProduto = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerFotosProdutos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FotoProdutoPrincipal = styled.div<FotoProdutoPrincipalInterface>`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-image: url(${(props) => props.backgroundFoto});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const WrapperInformacoesProduto = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImagemProduto = styled.div``;

const ProdutosPrincipaisTitulo = styled.h2`
  font-size: 6rem;
  color: ${colors.PrimaryTextColor};
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  margin: 0 0 0 0;
`;

const ProdutosPrincipaisDescricao = styled.p`
  width: 350px;
  text-align: center;
  color: ${colors.PrimaryTextColor};
  font-family: "Roboto", sans-serif;
`;

const ProdutosPrinpaisPreco = styled.span`
  color: ${colors.PrimaryTextColor};
  font-family: "Roboto", sans-serif;
  margin-bottom: 3rem;
`;

const ContainerBuyNow = styled.div`
  width: 10rem;
  position: relative;
`;

const ButtonBuyNow = styled.button`
  width: 80%;
  height: 100%;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50px;
  padding: 0.5rem 0;
  color: ${colors.PrimaryTextColor};
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

const AdicionarAoCarrinho = styled.button`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5c712;
  padding: 0.5rem;
  font-weight: bold;
  border-radius: 50%;
  position: absolute;
  border: 4px solid #b29611;
  right: 6px;
  top: -5px;
  animation: pulsate 1.5s infinite alternate;
  cursor: pointer;
`;

const NavInformacoesProduto = styled.nav`
  width: 6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

const SpanQuantidadeDeFotos = styled.span`
  font-family: "Roboto", sans-serif;
  color: ${colors.PrimaryTextColor};
`;

const SpanFotoAtual = styled.span`
  font-size: 2.5rem;
`;

const ContainerFotoAtual = styled.div``;

const NavFotoAtual = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const ButtonFotoAtual = styled.button<ButtonFotoAtualInterface>`
  width: 7px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.optionHeaderColor};
  cursor: pointer;
  &:hover {
    background-color: ${colors.PrimaryTextColor};
  }
`;

const ContainerNextAndPrevFoto = styled.div`
  width: 100%;
  height: 4rem;
  position: relative;
`;

const ButtonNext = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

const ButtonPrev = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  cursor: pointer;
`;

const RetaSpan = styled.span`
  position: absolute;
  left: 27%;
  top: 10%;
  transform: rotate(129deg);
`;

export {
  ShowProdutosComponente,
  ProdutosPrincipaisProdutos,
  WrapperFotosProduto,
  ContainerFotosProdutos,
  FotoProdutoPrincipal,
  WrapperInformacoesProduto,
  ImagemProduto,
  ProdutosPrincipaisTitulo,
  ProdutosPrincipaisDescricao,
  ProdutosPrinpaisPreco,
  ContainerBuyNow,
  ButtonBuyNow,
  AdicionarAoCarrinho,
  NavInformacoesProduto,
  SpanQuantidadeDeFotos,
  SpanFotoAtual,
  ContainerFotoAtual,
  NavFotoAtual,
  ButtonFotoAtual,
  ContainerNextAndPrevFoto,
  ButtonNext,
  ButtonPrev,
  RetaSpan,
};
