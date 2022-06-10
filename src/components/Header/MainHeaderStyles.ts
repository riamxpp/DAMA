import styled from "styled-components";
import { colors } from "../../colors";

const MainHeaderComponent = styled.header`
  width: 100%;
  background-color: ${colors.mainHeader};
  padding: 3rem 0;
  color: ${colors.PrimaryTextColor};
`;

const WrapperMainHeader = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
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

const ContainerLogoSociais = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContainerRedesSociaisHeader = styled.div`
  height: auto;
  width: 300px;
  display: flex;
  gap: 0.9rem;
  @media (max-width: 650px) {
    margin-bottom: 1rem;
  }
`;

const CapsulaRedeSocial = styled.div``;

const LogoMainHeader = styled.a`
  font-family: "Roboto", sans-serif;
  width: 300px;
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  &::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    background-color: yellow;
    left: 9.5%;
    top: 70%;
  }
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 3px;
    background: yellow;
    position: absolute;
    left: 73px;
  }
`;

const ContainerOptionsMainHeader = styled.div`
  display: flex;
  width: auto;
  gap: 3rem;
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

const NavegacaoMainHeder = styled.nav``;

const TituloMainHeader = styled.h1`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ListaMainHeader = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ItemMainHeader = styled.li`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

const LinkItemMainHeader = styled.a`
  color: ${colors.optionHeaderColor};
  cursor: pointer;
`;

export {
  MainHeaderComponent,
  WrapperMainHeader,
  LogoMainHeader,
  ContainerLogoSociais,
  CapsulaRedeSocial,
  ContainerRedesSociaisHeader,
  ContainerOptionsMainHeader,
  NavegacaoMainHeder,
  TituloMainHeader,
  ListaMainHeader,
  ItemMainHeader,
  LinkItemMainHeader,
};
