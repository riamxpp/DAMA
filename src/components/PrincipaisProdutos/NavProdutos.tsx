import React from "react";
import Celular from "../Icos/Celular";
import Computador from "../Icos/Computador";
import Controle from "../Icos/Controle";
import FoneDeOuvido from "../Icos/FoneDeOuvido";
import Notebook from "../Icos/Notebook";
import { NavProdutosInterface } from "./NavProdutosInterface";
import {
  ItemProdutoNav,
  ListaNavProdutos,
  NavProdutosComponente,
} from "./NavProdutosStyles";

const NavProdutos = (props: NavProdutosInterface) => {
  function mudandoEstadoProduto(event: React.MouseEvent<HTMLLIElement>) {
    // Utilizei repetição de verificão por não ter todos os nomes em uma array.
    if (
      event.currentTarget.ariaLabel === "fone" ||
      event.currentTarget.ariaLabel === "controle" ||
      event.currentTarget.ariaLabel === "computador" ||
      event.currentTarget.ariaLabel === "notebook" ||
      event.currentTarget.ariaLabel === "iphone"
    )
      props.setProdutoAtual(event.currentTarget.ariaLabel);
  }

  return (
    <NavProdutosComponente>
      <ListaNavProdutos>
        <ItemProdutoNav onClick={mudandoEstadoProduto} aria-label="fone">
          <FoneDeOuvido />
        </ItemProdutoNav>
        <ItemProdutoNav onClick={mudandoEstadoProduto} aria-label="iphone">
          <Celular />
        </ItemProdutoNav>
        <ItemProdutoNav onClick={mudandoEstadoProduto} aria-label="controle">
          <Controle />
        </ItemProdutoNav>
        <ItemProdutoNav onClick={mudandoEstadoProduto} aria-label="notebook">
          <Notebook />
        </ItemProdutoNav>
        <ItemProdutoNav onClick={mudandoEstadoProduto} aria-label="computador">
          <Computador />
        </ItemProdutoNav>
      </ListaNavProdutos>
    </NavProdutosComponente>
  );
};

export default NavProdutos;
