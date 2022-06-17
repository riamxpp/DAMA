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
import { mudaSlideAoClick } from "../reusable/mudaSlideAoClick";

const ShowPrincipaisProdutos = (props: ShowPrincipaisProdutosInterface) => {
  const [tamanhoSlide, setTamanhoSlide] = useState(0);
  const [dadosProduto, setDadosProduto] = useState<ProdutoInterface>({
    name: dados[props.produtoAtual].name,
    description: dados[props.produtoAtual].description,
    price: dados[props.produtoAtual].price,
    pictures: [...dados[props.produtoAtual].pictures],
  });
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
    if (containerFotoRef.current?.offsetWidth)
      setTamanhoSlide(containerFotoRef.current?.offsetWidth);

    window.addEventListener("resize", resetaSlide);
    return () => window.removeEventListener("resize", resetaSlide);
  }, [props.produtoAtual]);

  function nextSlide() {
    props.setMoveSlide((prev) => (prev -= tamanhoSlide));

    if (props.slidePosition !== QUANTIDADE_FOTOS)
      props.setSlidePosition((prev) => (prev += 1));
  }

  function prevSlide() {
    props.setMoveSlide((prev) => (prev += tamanhoSlide));

    if (props.slidePosition !== PRIMEIRO_SLIDE)
      props.setSlidePosition((prev) => (prev -= 1));
  }

  function resetaSlide() {
    props.setSlidePosition(PRIMEIRO_SLIDE);
    props.setMoveSlide(0);
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
          <ContainerFotosProdutos moveSlide={props.moveSlide}>
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
          <SpanFotoAtual>{props.slidePosition}</SpanFotoAtual>/
          {QUANTIDADE_FOTOS}
        </SpanQuantidadeDeFotos>
        <ContainerFotoAtual>
          <NavFotoAtual>
            {dadosProduto.pictures.map((item, index) => (
              <ButtonFotoAtual
                key={index}
                backgroundColor={
                  index + 1 === props.slidePosition
                    ? colors.PrimaryTextColor
                    : ""
                }
                onClick={() =>
                  mudaSlideAoClick(
                    index + 1,
                    props.slidePosition,
                    props.setMoveSlide,
                    containerFotoRef,
                    props.setSlidePosition
                  )
                }
              ></ButtonFotoAtual>
            ))}
          </NavFotoAtual>
        </ContainerFotoAtual>
        <ContainerNextAndPrevFoto>
          <ButtonPrev disabled={props.slidePosition === 1} onClick={prevSlide}>
            <ArrowLeft
              currentColor={
                props.slidePosition === 1 ? colors.initialHeader : "white"
              }
            />
          </ButtonPrev>
          <RetaSpan>
            <Reta />
          </RetaSpan>
          <ButtonNext
            disabled={props.slidePosition === QUANTIDADE_FOTOS}
            onClick={nextSlide}
          >
            <ArrowRight
              currentColor={
                props.slidePosition === QUANTIDADE_FOTOS
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
