import React, { useState } from "react";
import { colors } from "../../colors";
import Heart from "../Icos/Heart";
import Refresh from "../Icos/Refresh";
import ShopCar from "../Icos/ShopCar";
import {
  ContainerCategoriaComponent,
  ItemCategoria,
} from "../reusable/ContainerCategoria";
import { Categoria, Preco, NomeProduto } from "../reusable/InfoProduto";
import { ProdutoIndividualInterface } from "./ProdutoIndividualInterface";
import {
  ProdutoIndividualComponent,
  ProdutoIndividualComponentContainerInfo,
  ProdutoIndividualFoto,
  ProdutoIndividualInformacoes,
} from "./ProdutoIndividualStyles";

const ProdutoIndividual = (props: ProdutoIndividualInterface) => {
  const [visibileContent, setVisibleContent] = useState(false);

  return (
    <ProdutoIndividualComponent
      onMouseEnter={() => setVisibleContent(true)}
      onMouseLeave={() => setVisibleContent(false)}
    >
      <ProdutoIndividualFoto backgroundImg={props.foto}></ProdutoIndividualFoto>
      <ProdutoIndividualInformacoes>
        <ProdutoIndividualComponentContainerInfo>
          <Categoria>{props.categoria}</Categoria>
          <NomeProduto>{props.nome}</NomeProduto>
          <Preco>{props.preco}</Preco>
        </ProdutoIndividualComponentContainerInfo>

        <ContainerCategoriaComponent
          opacity={visibileContent === true ? "1" : "0"}
        >
          <ItemCategoria>
            <Refresh />
          </ItemCategoria>
          <ItemCategoria>
            <Heart />
          </ItemCategoria>
          <ItemCategoria backgroundColor={colors.amareloDetalhes}>
            <ShopCar />
          </ItemCategoria>
        </ContainerCategoriaComponent>
      </ProdutoIndividualInformacoes>
    </ProdutoIndividualComponent>
  );
};

export default ProdutoIndividual;
