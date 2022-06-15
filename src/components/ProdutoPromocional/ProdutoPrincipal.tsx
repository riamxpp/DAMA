import React, { useState } from "react";
import Heart from "../Icos/Heart";
import Refresh from "../Icos/Refresh";
import ShopCar from "../Icos/ShopCar";
import {
  CarroselFotos,
  CategoriaProduto,
  ContainerProdutoPrincipal,
  FotoPrincipalProduto,
  FotoUnica,
  GridProdutosPromocaoComponent,
  GridProdutosNomeProduto,
  GridProdutosPriceProduto,
  GridProdutosItemInfoProduto,
  GridProdutosListaInfoProduto,
  GridProdutosPreco,
  WrapperProdutoFoto,
  ContainerInformacoesProduto,
  GridProdutosContainerInteracoes,
  GridProdutosItemInteracao,
} from "./ProdutoPrincipalStyles";
const smartwatch1 = require("../../assents/smartwatch-1.jpg");
const smartwatch2 = require("../../assents/smartwatch-2.jpg");
const smartwatch3 = require("../../assents/smartwatch-3.jpg");

const GridProdutoProdutosPromocao = () => {
  const [fotoAtual, setFotoAtual] = useState(smartwatch1);
  const [ativaBordar, setAtivadorBordar] = useState(1);

  function mudaFotoPrincipal(foto: any, ativador: number) {
    setFotoAtual(foto);
    setAtivadorBordar(ativador);
  }

  return (
    <GridProdutosPromocaoComponent>
      <ContainerProdutoPrincipal>
        <WrapperProdutoFoto>
          <FotoPrincipalProduto
            backgroundImg={fotoAtual}
          ></FotoPrincipalProduto>
          {/* Map para as fotos aq */}

          <CarroselFotos>
            {" "}
            <FotoUnica
              borderColor={ativaBordar === 1}
              backgroundImg={smartwatch1}
              onClick={(event) => mudaFotoPrincipal(smartwatch1, 1)}
            />
            <FotoUnica
              borderColor={ativaBordar === 2}
              backgroundImg={smartwatch2}
              onClick={() => mudaFotoPrincipal(smartwatch2, 2)}
            />
            <FotoUnica
              borderColor={ativaBordar === 3}
              backgroundImg={smartwatch3}
              onClick={() => mudaFotoPrincipal(smartwatch3, 3)}
            />
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
            <GridProdutosItemInteracao backgroundColor="#f5c616">
              <ShopCar />
            </GridProdutosItemInteracao>
          </GridProdutosContainerInteracoes>
        </ContainerInformacoesProduto>
      </ContainerProdutoPrincipal>
    </GridProdutosPromocaoComponent>
  );
};

export default GridProdutoProdutosPromocao;
