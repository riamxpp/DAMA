import styled from "styled-components";

const ShowDiferentesProdutosComponent = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  font-family: "Roboto", sans-serif;
`;

const ShowDiferentesProdutoContainerProdutos = styled.div`
  @media (max-width: 1050px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const ShowDiferentesProdutosContainer = styled.div`
  width: 1000px;
  height: auto;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1050px) {
    flex-direction: column;
    width: 90%;
  }
`;

const ShowDiferentesProdutosColumn = styled.div`
  width: 33.33%;
  height: 100%;
  @media (max-width: 1050px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    align-items: center;
  }
`;

const ShowDiferentesProdutosTitulo = styled.h2`
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 0.4px;
  word-break: break-all;
`;

export {
  ShowDiferentesProdutosComponent,
  ShowDiferentesProdutosContainer,
  ShowDiferentesProdutoContainerProdutos,
  ShowDiferentesProdutosColumn,
  ShowDiferentesProdutosTitulo,
};
