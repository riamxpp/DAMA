import React from "react";
import Heart from "../Icos/Heart";
import Refresh from "../Icos/Refresh";
import ShopCar from "../Icos/ShopCar";
import {
  ContainerCategoriaComponent,
  ItemCategoria,
} from "../reusable/ContainerCategoria";
import {
  WeekHotsInfoCategoria,
  WeekHotsInfoComponent,
  WeekHotsInfoItem,
  WeekHotsInfoLista,
  WeekHotsInfoPreco,
  WeekHotsInfoPrecoPromocao,
  WeekHotsInfoPrice,
  WeekHotsInforContainer,
  WeekHotsInforContainerPreco,
  WeekHotsInfoSobreProduto,
  WeekHotsInfoSpanDeixaLetraAmarela,
  WeekHotsInfoTitulo,
} from "./WeekHotsInfoStyles";

const WeekHotsInfo = () => {
  return (
    <WeekHotsInfoComponent>
      <WeekHotsInforContainer>
        <WeekHotsInfoTitulo>
          <WeekHotsInfoSpanDeixaLetraAmarela>
            t
          </WeekHotsInfoSpanDeixaLetraAmarela>
          his week's hot deals
        </WeekHotsInfoTitulo>
        <WeekHotsInfoCategoria>Video game {"&"} console</WeekHotsInfoCategoria>
        <WeekHotsInfoSobreProduto>
          Beats Studio Wireless Over-Ear Black Headphones
        </WeekHotsInfoSobreProduto>
        <WeekHotsInfoLista>
          <WeekHotsInfoItem>
            Enjoy the largest libary of games, with blockbuster title
          </WeekHotsInfoItem>
          <WeekHotsInfoItem>
            Flat Folding Headphone Adjustable Headband
          </WeekHotsInfoItem>
          <WeekHotsInfoItem>32mm Speakers 1.2m Cable</WeekHotsInfoItem>
          <WeekHotsInforContainerPreco>
            <WeekHotsInfoPrice>price </WeekHotsInfoPrice>
            <WeekHotsInfoPreco>$ 250.00</WeekHotsInfoPreco> -
            <WeekHotsInfoPrecoPromocao> $380.00</WeekHotsInfoPrecoPromocao>
          </WeekHotsInforContainerPreco>

          <ContainerCategoriaComponent>
            <ItemCategoria>
              <Refresh />
            </ItemCategoria>
            <ItemCategoria>
              <Heart />
            </ItemCategoria>
            <ItemCategoria backgroundColor="#f5c616">
              <ShopCar />
            </ItemCategoria>
          </ContainerCategoriaComponent>
        </WeekHotsInfoLista>
      </WeekHotsInforContainer>
    </WeekHotsInfoComponent>
  );
};

export default WeekHotsInfo;
