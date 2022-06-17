import styled from "styled-components";
import { colors } from "../../colors";

const FooterInitialFooter = styled.footer`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background-color: ${colors.initialHeader};
`;

const FooterInitialContainer = styled.div`
  width: 900px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.PrimaryTextColor};
  font-family: "Roboto", sans-serif;
  @media (max-width: 950px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterInitialWrapperInfo = styled.div`
  @media (max-width: 950px) {
    width: auto;
    display: flex;
    flex-direction: column;
  }
`;

const FooterInitialLink = styled.a`
  text-transform: uppercase;
  margin-right: 10px;
  font-size: 0.9rem;
`;

const FooterInitialTextoYellow = styled.span`
  color: ${colors.amareloDetalhes};
  cursor: pointer;
`;

const FooterInitialTexto = styled.p`
  font-size: 0.9rem;
  display: inline;
  margin: 0;
`;

const FooterInitialInput = styled.input`
  width: 33%;
  height: 2.5rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background: ${colors.mainHeader};
  border: none;
  @media (max-width: 550px) {
    width: 15rem;
  }
`;

export {
  FooterInitialFooter,
  FooterInitialContainer,
  FooterInitialWrapperInfo,
  FooterInitialLink,
  FooterInitialTextoYellow,
  FooterInitialTexto,
  FooterInitialInput,
};
