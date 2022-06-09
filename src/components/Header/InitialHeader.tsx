import React from "react";
import Cash from "../Icos/Cash";
import Settings from "../Icos/Settings";
import ShopCar from "../Icos/ShopCar";
import Location from "../Icos/Location";
import {
  CarShopInitialHeader,
  InitialHeaderComponent,
  InitialHeaderMudarCor,
  ItemInitialHeader,
  LinkItemInitialHeader,
  ListaInitialHeader,
  NavInitialHeader,
  WrapperInitialHeader,
} from "./InitialHeaderStyles";
import Person from "../Icos/Person";

const InitialHeader = () => {
  return (
    <InitialHeaderComponent>
      <WrapperInitialHeader>
        <CarShopInitialHeader>
          <ShopCar></ShopCar>
        </CarShopInitialHeader>
        <NavInitialHeader>
          <ListaInitialHeader>
            <ItemInitialHeader>
              <LinkItemInitialHeader>
                <Settings />
                Guarantee
              </LinkItemInitialHeader>
            </ItemInitialHeader>
            <ItemInitialHeader>
              <LinkItemInitialHeader>
                <Location />
                Store location
              </LinkItemInitialHeader>
            </ItemInitialHeader>
            <ItemInitialHeader>
              <LinkItemInitialHeader>
                <Cash />
                Dollar (US)
              </LinkItemInitialHeader>
            </ItemInitialHeader>
            <ItemInitialHeader>
              <LinkItemInitialHeader>
                <Person />
                sign in <InitialHeaderMudarCor>of</InitialHeaderMudarCor>{" "}
                register
              </LinkItemInitialHeader>
            </ItemInitialHeader>
          </ListaInitialHeader>
        </NavInitialHeader>
      </WrapperInitialHeader>
    </InitialHeaderComponent>
  );
};

export default InitialHeader;
