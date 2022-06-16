import styled from "styled-components";
import {
  ContainerCategoriaComponentInterface,
  ItemCategoriaInterface,
} from "./ContaienrCategoriaInterface";

const ContainerCategoriaComponent = styled.div<ContainerCategoriaComponentInterface>`
  display: flex;
  justify-content: space-evenly;
  width: 10rem;
  opacity: ${(props) => (props.opacity ? props.opacity : "initial")};
  transition: 0.3s;
`;

const ItemCategoria = styled.div<ItemCategoriaInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#2C5490"};
  border-radius: 50%;
  cursor: pointer;
`;

export { ContainerCategoriaComponent, ItemCategoria };
