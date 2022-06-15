import styled from "styled-components";
import { ItemCategoriaInterface } from "./ContaienrCategoriaInterface";

const ContainerCategoriaComponent = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 10rem;
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
`;

export { ContainerCategoriaComponent, ItemCategoria };
