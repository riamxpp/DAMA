import styled from "styled-components";
import { colors } from "../../colors";

const PrincipaisProdutosComponent = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  background: ${colors.mainHeader};
  /*linear-gradient: 
   ( 150deg,
    ${colors.mainHeader} 75%,
    ${colors.mainHeader} 50%,
    #fff 76%,
    #fff 100%
  ); */
`;

const ContainerProdutosPrincipais = styled.div`
  width: 900px;
  height: auto;
  margin: 0 auto;
  display: flex;
`;

export { PrincipaisProdutosComponent, ContainerProdutosPrincipais };
