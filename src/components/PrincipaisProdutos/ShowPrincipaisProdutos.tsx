import React, { useState } from "react";
import {
  AdicionarAoCarrinho,
  ButtonBuyNow,
  ButtonFotoAtual,
  ButtonNext,
  ButtonPrev,
  ContainerBuyNow,
  ContainerFotoAtual,
  ContainerFotosProdutos,
  ContainerNextAndPrevFoto,
  FotoProdutoPrincipal,
  NavFotoAtual,
  NavInformacoesProduto,
  ProdutosPrincipaisDescricao,
  ProdutosPrincipaisProdutos,
  ProdutosPrincipaisTitulo,
  ProdutosPrinpaisPreco,
  RetaSpan,
  ShowProdutosComponente,
  SpanFotoAtual,
  SpanQuantidadeDeFotos,
  WrapperFotosProduto,
  WrapperInformacoesProduto,
} from "./ShowPrincipaisProdutosStyles";
import dados from "../../apiFake";
import {
  ProdutoInterface,
  ShowPrincipaisProdutosInterface,
} from "./ShowPrincipaisProdutosInterface";
import ArrowLeft from "../Icos/ArrowLeft";
import ArrowRight from "../Icos/ArrowRigth";
import Reta from "../Icos/Reta";
import ShopCar from "../Icos/ShopCar";

const ShowPrincipaisProdutos = (props: ShowPrincipaisProdutosInterface) => {
  const [dadosProduto, setDadosProduto] = useState<ProdutoInterface>({
    name: dados[props.produtoAtual].name,
    description: dados[props.produtoAtual].description,
    price: dados[props.produtoAtual].price,
    pictures: [...dados[props.produtoAtual].pictures],
  });
  return (
    <ShowProdutosComponente>
      <ProdutosPrincipaisProdutos>
        {/* Informações do produto */}
        <WrapperInformacoesProduto>
          <ProdutosPrincipaisTitulo>
            {dadosProduto.name}
          </ProdutosPrincipaisTitulo>
          <ProdutosPrincipaisDescricao>
            {dadosProduto.description}{" "}
          </ProdutosPrincipaisDescricao>
          <ProdutosPrinpaisPreco>
            {dadosProduto.price} usd
          </ProdutosPrinpaisPreco>
          <ContainerBuyNow>
            <ButtonBuyNow>Buy now</ButtonBuyNow>
            <AdicionarAoCarrinho>
              <ShopCar height="20" width="20" />
            </AdicionarAoCarrinho>
          </ContainerBuyNow>
        </WrapperInformacoesProduto>
        {/* Slide */}
        <WrapperFotosProduto>
          <ContainerFotosProdutos>
            {dadosProduto.pictures.map((item) => (
              <FotoProdutoPrincipal
                backgroundFoto={item}
              ></FotoProdutoPrincipal>
            ))}
          </ContainerFotosProdutos>
        </WrapperFotosProduto>
      </ProdutosPrincipaisProdutos>
      {/* navegação a direita */}
      <NavInformacoesProduto>
        <SpanQuantidadeDeFotos>
          <SpanFotoAtual>01</SpanFotoAtual>/{dadosProduto.pictures.length}
        </SpanQuantidadeDeFotos>
        <ContainerFotoAtual>
          <NavFotoAtual>
            <ButtonFotoAtual></ButtonFotoAtual>
            <ButtonFotoAtual></ButtonFotoAtual>
            <ButtonFotoAtual></ButtonFotoAtual>
          </NavFotoAtual>
        </ContainerFotoAtual>
        <ContainerNextAndPrevFoto>
          <ButtonPrev>
            <ArrowLeft />
          </ButtonPrev>
          <RetaSpan>
            <Reta />
          </RetaSpan>
          <ButtonNext>
            <ArrowRight />
          </ButtonNext>
        </ContainerNextAndPrevFoto>
      </NavInformacoesProduto>
    </ShowProdutosComponente>
  );
};

export default ShowPrincipaisProdutos;
