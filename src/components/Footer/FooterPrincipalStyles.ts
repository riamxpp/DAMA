import styled from "styled-components";
import { colors } from "../../colors";

const FooterPrincipalFooter = styled.footer`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background: ${colors.mainHeader};
  color: ${colors.PrimaryTextColor};
  font-family: "Roboto", sans-serif;
`;

const FooterPrincipalContainer = styled.div`
  width: 900px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    width: 90%;
    flex-wrap: wrap;
  }
`;

const FooterPrincipalInformacoes = styled.div`
  padding: 0.5rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DumaTitulo = styled.h4`
  width: 7rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 1.5px;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: ${colors.amareloDetalhes};
    position: absolute;
    border-radius: 50%;
    top: 70%;
    left: 22%;
  }
  &::after {
    content: "";
    display: inline-block;
    width: 15px;
    height: 2px;
    background-color: ${colors.amareloDetalhes};
    position: absolute;
    left: 56%;
  }
`;

const FooterPrincipalTexto = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-top: 1.3rem;
`;

const FooterPrincipalContato = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const FooterPrincipalContainerProdutos = styled.div`
  padding: 0.5rem;
`;

const FooterPrincipalTitulo = styled.h5`
  font-size: 1.3rem;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const FooterPrincipalCategoriaProduto = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    color: ${colors.amareloDetalhes};
  }
`;

const FooterPrincipalNavSite = styled.nav`
  padding: 0.5rem;
`;

const FooterPrincipalListaSite = styled.ul`
  list-style: none;
  margin-top: 2.5rem;
`;

const FooterPrincipalItemLista = styled.li`
  margin-bottom: 1rem;
`;

const FooterPrincipalLinkSite = styled.a`
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    color: ${colors.amareloDetalhes};
  }
`;

export {
  FooterPrincipalFooter,
  FooterPrincipalContainer,
  DumaTitulo,
  FooterPrincipalInformacoes,
  FooterPrincipalTexto,
  FooterPrincipalContato,
  FooterPrincipalContainerProdutos,
  FooterPrincipalTitulo,
  FooterPrincipalCategoriaProduto,
  FooterPrincipalNavSite,
  FooterPrincipalListaSite,
  FooterPrincipalItemLista,
  FooterPrincipalLinkSite,
};
