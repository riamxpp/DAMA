import styled from "styled-components";
import { ContainerFotoProdutoInterface } from "./ContDownPromocionalInterface";

const ContDownPromocionalComponent = styled.article`
  width: 300px;
  height: 500px;
  font-family: "Roboto", sans-serif;
`;

const ContainerFotoProduto = styled.div<ContainerFotoProdutoInterface>`
  width: 100%;
  height: 350px;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

const ContainerInformacoesProduto = styled.div``;

const ContainerNomeAndPreco = styled.div``;

const NomeProduto = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  display: block;
  line-height: 1.5;
  text-align: center;
  margin-top: 25px;
`;

const SaleOff = styled.span`
  text-transform: uppercase;
  line-height: 1.5;
  color: #8a8a8a;
  margin-left: 46px;
`;

const PrecoProdutoComDesconto = styled.span`
  color: #f5c616;
  line-height: 1.5;
  font-weight: bold;
`;

const PrecoProdutoSemDesconto = styled.span`
  text-decoration: line-through;
  color: #8a8a8a;
  line-height: 1.5;
`;

const ContainerVendasAndAvaliacao = styled.div`
  margin-top: 15px;
  justify-self: center;
  display: flex;
  justify-content: space-evenly;
`;

const Vendidos = styled.div``;

const Avalaciacoes = styled.div``;

const SpanVendaAndAvaliacao = styled.span`
  line-height: 1.5;
`;

const NumeroDeVendaAndAvaliacao = styled.span`
  line-height: 1.5;
`;

const ContainerTempoPromocao = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperTempoPromocao = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const TempoPromocaoUnico = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpanTempo = styled.span`
  margin: 0 auto;
  text-align: center;
  border: 2px solid #f5c616;
  padding: 0.5rem 0;
  width: 30px;
  border-radius: 2px;
  font-weight: bold;
`;

const SpanDiaHoraMinSec = styled.span`
  margin-top: 10px;
`;

const ContainerInteracoes = styled.div``;

const ItemInteracoes = styled.a``;

export {
  ContDownPromocionalComponent,
  ContainerFotoProduto,
  ContainerInformacoesProduto,
  NomeProduto,
  SaleOff,
  PrecoProdutoComDesconto,
  PrecoProdutoSemDesconto,
  ContainerNomeAndPreco,
  ContainerVendasAndAvaliacao,
  Vendidos,
  Avalaciacoes,
  SpanVendaAndAvaliacao,
  NumeroDeVendaAndAvaliacao,
  ContainerTempoPromocao,
  WrapperTempoPromocao,
  TempoPromocaoUnico,
  SpanTempo,
  SpanDiaHoraMinSec,
  ContainerInteracoes,
  ItemInteracoes,
};
