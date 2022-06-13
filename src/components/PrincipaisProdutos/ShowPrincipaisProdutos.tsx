import React, { useRef, useState, useEffect } from "react";
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
import { colors } from "../../colors";

const ShowPrincipaisProdutos = (props: ShowPrincipaisProdutosInterface) => {
  const [dadosProduto, setDadosProduto] = useState<ProdutoInterface>({
    name: dados[props.produtoAtual].name,
    description: dados[props.produtoAtual].description,
    price: dados[props.produtoAtual].price,
    pictures: [...dados[props.produtoAtual].pictures],
  });
  const [slidePosition, setSlidePosition] = useState(1);
  const [moveSlide, setMoveSlide] = useState(0);
  const containerFotoRef = useRef<HTMLDivElement>(null);
  const PRIMEIRO_SLIDE = 1;
  const QUANTIDADE_FOTOS = dadosProduto.pictures.length;

  useEffect(() => {
    setDadosProduto({
      name: dados[props.produtoAtual].name,
      description: dados[props.produtoAtual].description,
      price: dados[props.produtoAtual].price,
      pictures: [...dados[props.produtoAtual].pictures],
    });
  }, [props.produtoAtual]);

  function nextSlide() {
    if (containerFotoRef.current?.offsetWidth)
      setMoveSlide(
        (prev) => (prev -= Number(containerFotoRef.current?.offsetWidth))
      );
    if (slidePosition !== QUANTIDADE_FOTOS)
      setSlidePosition((prev) => (prev += 1));
  }

  function prevSlide() {
    if (containerFotoRef.current) {
      setMoveSlide(
        (prev) => (prev += Number(containerFotoRef.current?.offsetWidth))
      );
    }
    if (slidePosition !== PRIMEIRO_SLIDE)
      setSlidePosition((prev) => (prev -= 1));
  }

  function mudaSlideAoClique(position: number) {
    let diferencaDeSlide = 0;
    if (position > slidePosition) {
      diferencaDeSlide = position - slidePosition;
      setMoveSlide(
        (prev) =>
          (prev -=
            diferencaDeSlide * Number(containerFotoRef.current?.offsetWidth))
      );
    } else if (position < slidePosition) {
      diferencaDeSlide = slidePosition - position;

      setMoveSlide(
        (prev) =>
          (prev +=
            diferencaDeSlide * Number(containerFotoRef.current?.offsetWidth))
      );
    }
    setSlidePosition(position);
  }

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
          <ContainerFotosProdutos moveSlide={moveSlide}>
            {dadosProduto.pictures.map((item, index) => (
              <FotoProdutoPrincipal
                key={index}
                ref={containerFotoRef}
                backgroundFoto={item}
              ></FotoProdutoPrincipal>
            ))}
          </ContainerFotosProdutos>
        </WrapperFotosProduto>
      </ProdutosPrincipaisProdutos>
      {/* navegação a direita */}
      <NavInformacoesProduto>
        <SpanQuantidadeDeFotos>
          <SpanFotoAtual>{slidePosition}</SpanFotoAtual>/{QUANTIDADE_FOTOS}
        </SpanQuantidadeDeFotos>
        <ContainerFotoAtual>
          <NavFotoAtual>
            {dadosProduto.pictures.map((item, index) => (
              <ButtonFotoAtual
                key={index}
                backgroundColor={
                  index + 1 === slidePosition ? colors.PrimaryTextColor : ""
                }
                onClick={() => mudaSlideAoClique(index + 1)}
              ></ButtonFotoAtual>
            ))}
          </NavFotoAtual>
        </ContainerFotoAtual>
        <ContainerNextAndPrevFoto>
          <ButtonPrev disabled={slidePosition === 1} onClick={prevSlide}>
            <ArrowLeft
              currentColor={
                slidePosition === 1 ? colors.initialHeader : "white"
              }
            />
          </ButtonPrev>
          <RetaSpan>
            <Reta />
          </RetaSpan>
          <ButtonNext
            disabled={slidePosition === QUANTIDADE_FOTOS}
            onClick={nextSlide}
          >
            <ArrowRight
              currentColor={
                slidePosition === QUANTIDADE_FOTOS
                  ? colors.initialHeader
                  : "white"
              }
            />
          </ButtonNext>
        </ContainerNextAndPrevFoto>
      </NavInformacoesProduto>
    </ShowProdutosComponente>
  );
};

export default ShowPrincipaisProdutos;
