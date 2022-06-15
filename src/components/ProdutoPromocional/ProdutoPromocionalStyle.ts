import styled from "styled-components";

const ProdutoPromocionalComponent = styled.section``;

const ContainerSeguraInformacoes = styled.div`
  width: 900px;
  height: auto;
  margin: 0 auto;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-rows: 1fr 400px;
  justify-content: space-between;
  @media (max-width: 950px) {
    width: 750px;
  }
  @media (max-width: 800px) {
    width: 600px;
    grid-template-columns: 300px 1fr;
  }
  @media (max-width: 800px) {
    width: 90%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr) 370px 370px;
    justify-items: center;
  }
`;

export { ProdutoPromocionalComponent, ContainerSeguraInformacoes };
