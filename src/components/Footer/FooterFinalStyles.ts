import styled from "styled-components";
import { colors } from "../../colors";

const FooterFinalFooter = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background: ${colors.initialHeader};
  color: ${colors.PrimaryTextColor};
  font-family: "Roboto", sans-serif;
`;

const FooterFinalTexto = styled.p`
  text-align: center;
`;

const FooterFinalLink = styled.a`
  color: ${colors.PrimaryTextColor};
  text-decoration: none;
  &:hover {
    color: ${colors.amareloDetalhes};
  }
`;

export { FooterFinalFooter, FooterFinalTexto, FooterFinalLink };
