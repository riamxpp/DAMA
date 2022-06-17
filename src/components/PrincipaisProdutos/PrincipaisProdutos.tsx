import React, { useState } from "react";
import NavProdutos from "./NavProdutos";
import {
  ContainerProdutosPrincipais,
  PrincipaisProdutosComponent,
} from "./PrincipaisProdutosStyles";
import ShowPrincipaisProdutos from "./ShowPrincipaisProdutos";
import { TypeProduto } from "./ShowPrincipaisProdutosInterface";

const PrincipaisProdutos = () => {
  const [produtoAtual, setProdutoAtual] = useState<TypeProduto>("fone");
  const [slidePosition, setSlidePosition] = useState(1);
  const [moveSlide, setMoveSlide] = useState(0);

  return (
    <PrincipaisProdutosComponent>
      <ContainerProdutosPrincipais>
        <NavProdutos
          setSlidePosition={setSlidePosition}
          setMoveSlide={setMoveSlide}
          setProdutoAtual={setProdutoAtual}
        ></NavProdutos>
        <ShowPrincipaisProdutos
          produtoAtual={produtoAtual}
          slidePosition={slidePosition}
          setSlidePosition={setSlidePosition}
          moveSlide={moveSlide}
          setMoveSlide={setMoveSlide}
        ></ShowPrincipaisProdutos>
      </ContainerProdutosPrincipais>
    </PrincipaisProdutosComponent>
  );
};

export default PrincipaisProdutos;
