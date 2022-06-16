import styled from "styled-components";
import { ProdutoIndividualFotoInterface } from "./ProdutoIndividualInterface";

const ProdutoIndividualComponent = styled.div`
  height: auto;
  padding: 1rem;
  display: flex;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: -1px 0px 18px 2px rgba(0, 0, 0, 0.28);
    box-shadow: -1px 0px 18px 2px rgba(0, 0, 0, 0.28);
    transition: 0.3s;
  }
`;

const ProdutoIndividualFoto = styled.div<ProdutoIndividualFotoInterface>`
  width: 35%;
  height: 200px;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  @media (max-width: 1050px) {
    width: 100%;
    display: flex;
  }
`;

const ProdutoIndividualInformacoes = styled.div`
  width: 65%;
  height: 100%;
  padding: 0.5rem;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const ProdutoIndividualComponentContainerInfo = styled.div`
  margin-bottom: 10px;
`;

export {
  ProdutoIndividualComponent,
  ProdutoIndividualFoto,
  ProdutoIndividualInformacoes,
  ProdutoIndividualComponentContainerInfo,
};
