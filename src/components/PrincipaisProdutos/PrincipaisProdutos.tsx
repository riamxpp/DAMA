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

  return (
    <PrincipaisProdutosComponent>
      <ContainerProdutosPrincipais>
        <NavProdutos setProdutoAtual={setProdutoAtual}></NavProdutos>
        <ShowPrincipaisProdutos
          produtoAtual={produtoAtual}
        ></ShowPrincipaisProdutos>
      </ContainerProdutosPrincipais>
    </PrincipaisProdutosComponent>
  );
};

export default PrincipaisProdutos;
