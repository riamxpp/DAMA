import styled from "styled-components";
import { colors } from "../../colors";

const NavProdutosComponente = styled.nav`
  width: 3.5rem;

  @media (max-width: 950px) {
    width: auto;
    display: flex;
    justify-content: center;
  }
`;

const ListaNavProdutos = styled.ul`
  @media (max-width: 950px) {
    display: flex;
  }
`;

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
  @media (max-width: 950px) {
    flex-shrink: 0;
  }
`;

export { NavProdutosComponente, ListaNavProdutos, ItemProdutoNav };
