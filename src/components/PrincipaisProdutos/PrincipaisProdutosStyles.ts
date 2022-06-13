import styled from "styled-components";
import { colors } from "../../colors";

const PrincipaisProdutosComponent = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  background: ${colors.mainHeader};
`;

const ContainerProdutosPrincipais = styled.div`
  width: 900px;
  height: auto;
  margin: 0 auto;
  display: flex;
  @media (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;

export { PrincipaisProdutosComponent, ContainerProdutosPrincipais };
