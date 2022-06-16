import React from "react";
import {
  ShowDiferentesProdutoContainerProdutos,
  ShowDiferentesProdutosColumn,
  ShowDiferentesProdutosComponent,
  ShowDiferentesProdutosContainer,
  ShowDiferentesProdutosTitulo,
} from "./ShowDiferentesProdutosStyle";
import ProdutoIndividual from "./ProdutoIndividual";
import { LetraAmarela } from "../reusable/InfoProduto";
const headphone1 = require("../../assents/headphone-1.png");
const smartwatch1 = require("../../assents/smartwatch-1.jpg");
const smartwatch2 = require("../../assents/smartwatch-2.jpg");
const controle1 = require("../../assents/controle-1.png");
const notebook = require("../../assents/notebook-1.png");
const headphoneJbl = require("../../assents/HeadphoneJbl-1.png");
const headphone2 = require("../../assents/headphone-2.png");
const iphone = require("../../assents/iphone-12-1.png");
const computador = require("../../assents/computador-1.png");

const ShowDiferentesProdutos = () => {
  return (
    <ShowDiferentesProdutosComponent>
      <ShowDiferentesProdutosContainer>
        <ShowDiferentesProdutosColumn>
          <ShowDiferentesProdutosTitulo>
            <LetraAmarela>f</LetraAmarela>eature product{" "}
          </ShowDiferentesProdutosTitulo>
          <ShowDiferentesProdutoContainerProdutos>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={headphone1}
            ></ProdutoIndividual>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={smartwatch1}
            ></ProdutoIndividual>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={computador}
            ></ProdutoIndividual>
          </ShowDiferentesProdutoContainerProdutos>
        </ShowDiferentesProdutosColumn>
        <ShowDiferentesProdutosColumn>
          <ShowDiferentesProdutosTitulo>
            <LetraAmarela>t</LetraAmarela>op review
          </ShowDiferentesProdutosTitulo>
          <ShowDiferentesProdutoContainerProdutos>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={smartwatch2}
            ></ProdutoIndividual>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={iphone}
            ></ProdutoIndividual>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={headphone2}
            ></ProdutoIndividual>
          </ShowDiferentesProdutoContainerProdutos>
        </ShowDiferentesProdutosColumn>
        <ShowDiferentesProdutosColumn>
          <ShowDiferentesProdutosTitulo>
            <LetraAmarela>p</LetraAmarela>opular
          </ShowDiferentesProdutosTitulo>
          <ShowDiferentesProdutoContainerProdutos>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={controle1}
            ></ProdutoIndividual>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={notebook}
            ></ProdutoIndividual>
            <ProdutoIndividual
              categoria="watch"
              nome="Mens Hugo Boss Chronograph Watch"
              preco="250.00"
              foto={headphoneJbl}
            ></ProdutoIndividual>
          </ShowDiferentesProdutoContainerProdutos>
        </ShowDiferentesProdutosColumn>
      </ShowDiferentesProdutosContainer>
    </ShowDiferentesProdutosComponent>
  );
};

export default ShowDiferentesProdutos;
