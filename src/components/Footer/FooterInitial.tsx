import React from "react";
import {
  FooterInitialContainer,
  FooterInitialFooter,
  FooterInitialInput,
  FooterInitialLink,
  FooterInitialTexto,
  FooterInitialTextoYellow,
  FooterInitialWrapperInfo,
} from "./FooterInitialStyles";

const FooterInitial = () => {
  return (
    <FooterInitialFooter>
      <FooterInitialContainer>
        <FooterInitialWrapperInfo>
          <FooterInitialLink>
            <FooterInitialTextoYellow>sign up </FooterInitialTextoYellow>
            sign up to newsletter{" "}
          </FooterInitialLink>
          <FooterInitialTexto>
            and receilve $20 coupon for first shopping{" "}
          </FooterInitialTexto>
        </FooterInitialWrapperInfo>
        <FooterInitialInput placeholder="Enter your email"></FooterInitialInput>
      </FooterInitialContainer>
    </FooterInitialFooter>
  );
};

export default FooterInitial;
