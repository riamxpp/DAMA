import React from "react";
import Facebook from "../Icos/Facebook";
import Google from "../Icos/Google";
import Instagram from "../Icos/Instagram";
import Twitter from "../Icos/Twitter";
import {
  CapsulaRedeSocial,
  ContainerLogoSociais,
  ContainerOptionsMainHeader,
  ContainerRedesSociaisHeader,
  ItemMainHeader,
  LinkItemMainHeader,
  ListaMainHeader,
  LogoMainHeader,
  MainHeaderComponent,
  NavegacaoMainHeder,
  TituloMainHeader,
  WrapperMainHeader,
} from "./MainHeaderStyles";

const MainHeader = () => {
  return (
    <MainHeaderComponent>
      <WrapperMainHeader>
        <ContainerLogoSociais>
          <LogoMainHeader>dama</LogoMainHeader>
          <ContainerRedesSociaisHeader>
            <CapsulaRedeSocial>
              <Facebook />
            </CapsulaRedeSocial>
            <CapsulaRedeSocial>
              <Twitter />
            </CapsulaRedeSocial>
            <CapsulaRedeSocial>
              <Instagram />
            </CapsulaRedeSocial>
            <CapsulaRedeSocial>
              <Google />
            </CapsulaRedeSocial>
          </ContainerRedesSociaisHeader>
        </ContainerLogoSociais>
        <ContainerOptionsMainHeader>
          <NavegacaoMainHeder>
            <TituloMainHeader>store</TituloMainHeader>
            <ListaMainHeader>
              <LinkItemMainHeader>
                <ItemMainHeader>Home</ItemMainHeader>
              </LinkItemMainHeader>
              <LinkItemMainHeader>
                <ItemMainHeader>About us</ItemMainHeader>
              </LinkItemMainHeader>
              <LinkItemMainHeader>
                <ItemMainHeader>Contact us</ItemMainHeader>
              </LinkItemMainHeader>
            </ListaMainHeader>
          </NavegacaoMainHeder>
          <NavegacaoMainHeder>
            <TituloMainHeader>product</TituloMainHeader>
            <ListaMainHeader>
              <LinkItemMainHeader>
                <ItemMainHeader>New </ItemMainHeader>
              </LinkItemMainHeader>
              <LinkItemMainHeader>
                <ItemMainHeader>Featured</ItemMainHeader>
              </LinkItemMainHeader>
              <LinkItemMainHeader>
                <ItemMainHeader>Sale off</ItemMainHeader>
              </LinkItemMainHeader>
            </ListaMainHeader>
          </NavegacaoMainHeder>
          <NavegacaoMainHeder>
            <TituloMainHeader>blog</TituloMainHeader>
            <ListaMainHeader>
              <LinkItemMainHeader>
                <ItemMainHeader>New blog</ItemMainHeader>
              </LinkItemMainHeader>
              <LinkItemMainHeader>
                <ItemMainHeader>Lester</ItemMainHeader>
              </LinkItemMainHeader>
            </ListaMainHeader>
          </NavegacaoMainHeder>
        </ContainerOptionsMainHeader>
      </WrapperMainHeader>
    </MainHeaderComponent>
  );
};

export default MainHeader;
