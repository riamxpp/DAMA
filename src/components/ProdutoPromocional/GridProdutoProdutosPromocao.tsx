import React from "react";
import {
  ContainerInformacoesProduto,
  NomeProduto,
} from "./ContDownPromocionalStyles";
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
  ItemInfoProduto,
  ListaInfoProduto,
  Preco,
  PriceProduto,
  WrapperProdutoFoto,
} from "./GridProdutoProdutosPromocaoStyles";

const GridProdutoProdutosPromocao = () => {
  return (
    <GridProdutosPromocaoComponent>
      <ContainerProdutoPrincipal>
        <WrapperProdutoFoto>
          <CarroselFotos>
            <FotoPrincipalProduto></FotoPrincipalProduto>
            {/* Map para as fotos aq */}
            <FotoUnica></FotoUnica>
          </CarroselFotos>
        </WrapperProdutoFoto>
        {/* principal */}
        <ContainerInformacoesProduto>
          <CategoriaProduto>watch</CategoriaProduto>
          <NomeProduto>Mota SmartWatch G2 Pro</NomeProduto>
          <PriceProduto>price</PriceProduto>
          <Preco>$ 250.00</Preco>
          <ListaInfoProduto>
            <ItemInfoProduto>Windows 10</ItemInfoProduto>
            <ItemInfoProduto>Intel Quad Core Processors</ItemInfoProduto>
            <ItemInfoProduto>
              NVIDIA GeForce GTX 950M Graphics Card
            </ItemInfoProduto>
          </ListaInfoProduto>
        </ContainerInformacoesProduto>
      </ContainerProdutoPrincipal>
      {/* secundarios */}
      <ContainerProdutosSecundarios>
        <CategoriaProduto>Watch</CategoriaProduto>
        <NomeProduto>Apple watch sport green</NomeProduto>
        <PriceProduto>price</PriceProduto>
        <Preco>$ 250.00</Preco>
        <FotoProdutoSecundario></FotoProdutoSecundario>
        <InfoProdutosSecundarios>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </InfoProdutosSecundarios>
      </ContainerProdutosSecundarios>
      <ContainerProdutosSecundarios>
        <CategoriaProduto>Laptop</CategoriaProduto>
        <NomeProduto>HP Spectre x360 - 15t</NomeProduto>
        <PriceProduto>price</PriceProduto>
        <Preco>$ 250.00</Preco>
        <FotoProdutoSecundario></FotoProdutoSecundario>
        <InfoProdutosSecundarios>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </InfoProdutosSecundarios>
      </ContainerProdutosSecundarios>
    </GridProdutosPromocaoComponent>
  );
};

export default GridProdutoProdutosPromocao;
