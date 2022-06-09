import styled from "styled-components";
import { colors } from "../../colors";

const InitialHeaderComponent = styled.header`
  background: ${colors.initialHeader};
  color: ${colors.PrimaryTextColor};
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  padding: 0.5rem 0;
`;

const WrapperInitialHeader = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const CarShopInitialHeader = styled.a``;

const NavInitialHeader = styled.nav``;

const ListaInitialHeader = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const ItemInitialHeader = styled.li``;

const LinkItemInitialHeader = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;

const InitialHeaderMudarCor = styled.span`
  color: ${colors.optionHeaderColor};
`;

export {
  InitialHeaderComponent,
  WrapperInitialHeader,
  CarShopInitialHeader,
  NavInitialHeader,
  ListaInitialHeader,
  ItemInitialHeader,
  LinkItemInitialHeader,
  InitialHeaderMudarCor,
};
