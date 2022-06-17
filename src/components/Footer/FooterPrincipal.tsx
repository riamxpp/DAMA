import React from "react";
import Envelope from "../Icos/Envelope";
import Localizacao from "../Icos/Localizacao";
import Telefone from "../Icos/Telefone";
import {
  DumaTitulo,
  FooterPrincipalCategoriaProduto,
  FooterPrincipalContainer,
  FooterPrincipalContainerProdutos,
  FooterPrincipalContato,
  FooterPrincipalFooter,
  FooterPrincipalInformacoes,
  FooterPrincipalItemLista,
  FooterPrincipalLinkSite,
  FooterPrincipalListaSite,
  FooterPrincipalNavSite,
  FooterPrincipalTexto,
  FooterPrincipalTitulo,
} from "./FooterPrincipalStyles";

const FooterPrincipal = () => {
  return (
    <FooterPrincipalFooter>
      <FooterPrincipalContainer>
        <FooterPrincipalInformacoes>
          <DumaTitulo>Dama</DumaTitulo>
          <FooterPrincipalTexto>
            lorem las lrm eur lorem las lrm eurlorem las lrm eurlorem las lrm
            eurlorem las lrm eurlorem las lrm eur
          </FooterPrincipalTexto>
          <FooterPrincipalContato>
            <Localizacao /> PO Box CT16122 Collins Street West, Victoria 8007,
            Australia
          </FooterPrincipalContato>
          <FooterPrincipalContato>
            <Telefone /> +81 (2) 345 6789
          </FooterPrincipalContato>
          <FooterPrincipalContato>
            <Envelope /> contact@youremail.com
          </FooterPrincipalContato>
        </FooterPrincipalInformacoes>
        <FooterPrincipalContainerProdutos>
          <FooterPrincipalTitulo>quic link</FooterPrincipalTitulo>
          <FooterPrincipalCategoriaProduto>
            Headphone
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Smartwatch
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Smartphone
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Video game {"&"} console
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Laptop
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Television
          </FooterPrincipalCategoriaProduto>
        </FooterPrincipalContainerProdutos>
        <FooterPrincipalNavSite>
          <FooterPrincipalListaSite>
            <FooterPrincipalItemLista>
              <FooterPrincipalLinkSite>Home</FooterPrincipalLinkSite>
            </FooterPrincipalItemLista>
            <FooterPrincipalItemLista>
              <FooterPrincipalLinkSite>About us</FooterPrincipalLinkSite>
            </FooterPrincipalItemLista>
            <FooterPrincipalItemLista>
              <FooterPrincipalLinkSite>Blog</FooterPrincipalLinkSite>
            </FooterPrincipalItemLista>
            <FooterPrincipalItemLista>
              <FooterPrincipalLinkSite>Service</FooterPrincipalLinkSite>
            </FooterPrincipalItemLista>
            <FooterPrincipalItemLista>
              <FooterPrincipalLinkSite>Contact us</FooterPrincipalLinkSite>
            </FooterPrincipalItemLista>
          </FooterPrincipalListaSite>
        </FooterPrincipalNavSite>{" "}
        <FooterPrincipalContainerProdutos>
          <FooterPrincipalTitulo>customer care</FooterPrincipalTitulo>
          <FooterPrincipalCategoriaProduto>
            My account
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Order tracking
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            wish list
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Customer services
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Returns/Exchange
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            FAQS
          </FooterPrincipalCategoriaProduto>
          <FooterPrincipalCategoriaProduto>
            Product support
          </FooterPrincipalCategoriaProduto>
        </FooterPrincipalContainerProdutos>
      </FooterPrincipalContainer>
    </FooterPrincipalFooter>
  );
};

export default FooterPrincipal;
