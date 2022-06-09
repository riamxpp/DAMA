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
  @media (max-width: 950px) {
    width: 750px;
  }
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    width: 90%;
  }
`;

const CarShopInitialHeader = styled.a`
  @media (max-width: 650px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const NavInitialHeader = styled.nav``;

const ListaInitialHeader = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
  }
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
