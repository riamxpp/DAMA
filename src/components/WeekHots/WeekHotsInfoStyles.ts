import styled from "styled-components";
import { colors } from "../../colors";

const WeekHotsInfoComponent = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${colors.PrimaryTextColor};
  padding: 2rem 0 0 0;
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const WeekHotsInforContainer = styled.div`
  width: 100%;
  height: 320px;
  margin-left: 20px;
  @media (max-width: 800px) {
    height: auto;
  }
`;

const WeekHotsInfoTitulo = styled.h2`
  text-transform: uppercase;
  &::before {
    content: "";
    display: inline-block;
    width: 40px;
    height: 2px;
    background: #f5c616;
    margin-bottom: 6px;
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;

const WeekHotsInfoSpanDeixaLetraAmarela = styled.span`
  color: #f5c616;
`;

const WeekHotsInfoCategoria = styled.span``;

const WeekHotsInfoSobreProduto = styled.p``;

const WeekHotsInfoLista = styled.ul``;

const WeekHotsInfoItem = styled.li`
  margin: 0 0 10px 18px;
`;

const WeekHotsInforContainerPreco = styled.div`
  margin: 20px 0 20px 0;
`;

const WeekHotsInfoPrice = styled.span``;

const WeekHotsInfoPreco = styled.span``;

const WeekHotsInfoPrecoPromocao = styled.span``;

const WeekHotsInfoContainerCategorias = styled.div``;

const WeekHotsCategoria = styled.div``;

export {
  WeekHotsInfoComponent,
  WeekHotsInforContainer,
  WeekHotsInfoTitulo,
  WeekHotsInfoSpanDeixaLetraAmarela,
  WeekHotsInfoCategoria,
  WeekHotsInfoSobreProduto,
  WeekHotsInfoLista,
  WeekHotsInfoItem,
  WeekHotsInforContainerPreco,
  WeekHotsInfoPrice,
  WeekHotsInfoPreco,
  WeekHotsInfoPrecoPromocao,
  WeekHotsInfoContainerCategorias,
  WeekHotsCategoria,
};
