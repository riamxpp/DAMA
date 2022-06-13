import React from "react";
import {
  Avalaciacoes,
  ContainerFotoProduto,
  ContainerInformacoesProduto,
  ContainerInteracoes,
  ContainerNomeAndPreco,
  ContainerTempoPromocao,
  ContainerVendasAndAvaliacao,
  ContDownPromocionalComponent,
  ItemInteracoes,
  NomeProduto,
  NumeroDeVendaAndAvaliacao,
  PrecoProdutoComDesconto,
  PrecoProdutoSemDesconto,
  SaleOff,
  SpanDiaHoraMinSec,
  SpanTempo,
  SpanVendaAndAvaliacao,
  TempoPromocaoUnico,
  Vendidos,
  WrapperTempoPromocao,
} from "./ContDownPromocionalStyles";

const ContDownPromocional = () => {
  return (
    <ContDownPromocionalComponent>
      {/* Foto */}
      <ContainerFotoProduto></ContainerFotoProduto>
      {/* Informações */}
      <ContainerInformacoesProduto>
        <ContainerNomeAndPreco>
          <NomeProduto>iphone 6s 64gb</NomeProduto>
          <SaleOff>sale off</SaleOff>
          <PrecoProdutoComDesconto>$ 250.00</PrecoProdutoComDesconto>
          <PrecoProdutoSemDesconto>- $ 350.00</PrecoProdutoSemDesconto>
        </ContainerNomeAndPreco>
        <ContainerVendasAndAvaliacao>
          <Vendidos>
            <SpanVendaAndAvaliacao>
              Already sold
              <NumeroDeVendaAndAvaliacao>16</NumeroDeVendaAndAvaliacao>
            </SpanVendaAndAvaliacao>
          </Vendidos>
          <Avalaciacoes>
            <SpanVendaAndAvaliacao>
              Availavie
              <NumeroDeVendaAndAvaliacao> 5</NumeroDeVendaAndAvaliacao>
            </SpanVendaAndAvaliacao>
          </Avalaciacoes>
        </ContainerVendasAndAvaliacao>
        <ContainerTempoPromocao>
          <WrapperTempoPromocao>
            <TempoPromocaoUnico>
              <SpanTempo>02</SpanTempo>
              <SpanDiaHoraMinSec>Day</SpanDiaHoraMinSec>
            </TempoPromocaoUnico>
            <TempoPromocaoUnico>
              <SpanTempo>24</SpanTempo>
              <SpanDiaHoraMinSec>Hours</SpanDiaHoraMinSec>
            </TempoPromocaoUnico>
            <TempoPromocaoUnico>
              <SpanTempo>35</SpanTempo>
              <SpanDiaHoraMinSec>Mins</SpanDiaHoraMinSec>
            </TempoPromocaoUnico>
            <TempoPromocaoUnico>
              <SpanTempo>02</SpanTempo>
              <SpanDiaHoraMinSec>Secs</SpanDiaHoraMinSec>
            </TempoPromocaoUnico>
          </WrapperTempoPromocao>
        </ContainerTempoPromocao>
        <ContainerInteracoes>
          <ItemInteracoes></ItemInteracoes>
          <ItemInteracoes></ItemInteracoes>
          <ItemInteracoes></ItemInteracoes>
        </ContainerInteracoes>
      </ContainerInformacoesProduto>
    </ContDownPromocionalComponent>
  );
};

export default ContDownPromocional;
