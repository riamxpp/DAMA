import styled from "styled-components";
import { colors } from "../../colors";

const NavProdutosComponente = styled.nav`
  width: 3.5rem;
`;

const ListaNavProdutos = styled.ul``;

const ItemProdutoNav = styled.li`
  background-color: ${colors.initialHeader};
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.initialHeader + 50};
  }
`;

export { NavProdutosComponente, ListaNavProdutos, ItemProdutoNav };
