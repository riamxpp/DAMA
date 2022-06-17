import React from "react";
import {
  FooterFinalFooter,
  FooterFinalLink,
  FooterFinalTexto,
} from "./FooterFinalStyles";

const FooterFinal = () => {
  return (
    <FooterFinalFooter>
      <FooterFinalTexto>
        Feito por{" "}
        <FooterFinalLink href="https://github.com/riamxpp">
          Riam
        </FooterFinalLink>
      </FooterFinalTexto>
    </FooterFinalFooter>
  );
};

export default FooterFinal;
