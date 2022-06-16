import styled from "styled-components";
import { colors } from "../../colors";

const Categoria = styled.a`
  display: block;
  color: #0046cc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
`;

const NomeProduto = styled.span`
  display: block;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  line-height: 1.5;
`;

const Preco = styled.span`
  color: ${colors.amareloDetalhes};
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  line-height: 1.5;
`;

const LetraAmarela = styled.span`
  color: ${colors.amareloDetalhes};
  line-height: 1.5;
  &::before {
    content: "";
    display: inline;
    background-color: ${colors.amareloDetalhes};
    content: "";
    display: inline-block;
    width: 40px;
    height: 2px;
    background: #f5c616;
    margin-bottom: 6px;
    margin-right: 10px;
  }
`;

export { Categoria, NomeProduto, Preco, LetraAmarela };
