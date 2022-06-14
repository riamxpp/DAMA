import React from "react";
import Heart from "../Icos/Heart";
import Refresh from "../Icos/Refresh";
import ShopCar from "../Icos/ShopCar";
import {
  CarroselFotos,
  CategoriaProduto,
  ContainerProdutoPrincipal,
  ContainerProdutosSecundarios,
  FotoPrincipalProduto,
  FotoProdutoSecundario,
  FotoUnica,
  GridProdutosPromocaoComponent,
  InfoProdutosSecundarios,
  GridProdutosNomeProduto,
  GridProdutosPriceProduto,
  GridProdutosItemInfoProduto,
  GridProdutosListaInfoProduto,
  GridProdutosPreco,
  WrapperProdutoFoto,
  ContainerInformacoesProduto,
  GridProdutosContainerInteracoes,
  GridProdutosItemInteracao,
} from "./GridProdutoProdutosPromocaoStyles";
const smartwatch1 = require("../../assents/smartwatch-1.jpg");
const smartwatch2 = require("../../assents/smartwatch-2.jpg");
const smartwatch3 = require("../../assents/smartwatch-3.jpg");
const smartwatchAzul = require("../../assents/smartwatch-azul.jpg");
const leptop = require("../../assents/notebook-spcetre.jpg");

const GridProdutoProdutosPromocao = () => {
  return (
    <GridProdutosPromocaoComponent>
      <ContainerProdutoPrincipal>
        <WrapperProdutoFoto>
          <FotoPrincipalProduto
            backgroundImg={smartwatch1}
          ></FotoPrincipalProduto>
          {/* Map para as fotos aq */}

          <CarroselFotos>
            {" "}
            <FotoUnica borderColor="2" backgroundImg={smartwatch1} />
            <FotoUnica backgroundImg={smartwatch2} />
            <FotoUnica backgroundImg={smartwatch3} />
          </CarroselFotos>
        </WrapperProdutoFoto>
        {/* principal */}
        <ContainerInformacoesProduto>
          <CategoriaProduto>Watch</CategoriaProduto>
          <GridProdutosNomeProduto>
            Mota SmartWatch G2 Pro
          </GridProdutosNomeProduto>
          <GridProdutosPriceProduto>price: </GridProdutosPriceProduto>
          <GridProdutosPreco>$ 250.00</GridProdutosPreco>
          <GridProdutosListaInfoProduto>
            <GridProdutosItemInfoProduto>
              Windows 10
            </GridProdutosItemInfoProduto>
            <GridProdutosItemInfoProduto>
              Intel Quad Core Processors
            </GridProdutosItemInfoProduto>
            <GridProdutosItemInfoProduto>
              NVIDIA GeForce GTX 950M Graphics Card
            </GridProdutosItemInfoProduto>
          </GridProdutosListaInfoProduto>
          <GridProdutosContainerInteracoes>
            <GridProdutosItemInteracao>
              <Refresh />
            </GridProdutosItemInteracao>
            <GridProdutosItemInteracao>
              <Heart />
            </GridProdutosItemInteracao>
            <GridProdutosItemInteracao>
              <ShopCar />
            </GridProdutosItemInteracao>
          </GridProdutosContainerInteracoes>
        </ContainerInformacoesProduto>
      </ContainerProdutoPrincipal>
      {/* secundarios */}
      <ContainerProdutosSecundarios padding="2rem 1rem 1rem 2rem">
        <CategoriaProduto>Watch</CategoriaProduto>
        <GridProdutosNomeProduto>
          Apple watch sport green
        </GridProdutosNomeProduto>
        <GridProdutosPriceProduto>price: </GridProdutosPriceProduto>
        <GridProdutosPreco>$ 250.00</GridProdutosPreco>
        <FotoProdutoSecundario
          backgroundImg={smartwatchAzul}
        ></FotoProdutoSecundario>
        <InfoProdutosSecundarios>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </InfoProdutosSecundarios>
      </ContainerProdutosSecundarios>
      <ContainerProdutosSecundarios padding="2rem 2rem 1rem 1rem">
        <CategoriaProduto>Laptop</CategoriaProduto>
        <GridProdutosNomeProduto>HP Spectre x360 - 15t</GridProdutosNomeProduto>
        <GridProdutosPriceProduto>price: </GridProdutosPriceProduto>
        <GridProdutosPreco>$ 250.00</GridProdutosPreco>
        <FotoProdutoSecundario backgroundImg={leptop}></FotoProdutoSecundario>
        <InfoProdutosSecundarios>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </InfoProdutosSecundarios>
      </ContainerProdutosSecundarios>
    </GridProdutosPromocaoComponent>
  );
};

export default GridProdutoProdutosPromocao;
