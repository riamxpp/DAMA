import styled from "styled-components";
import {
  FotoSlideWeekInterface,
  ItemSlideFotoInterface,
  ItemSlideInterface,
  MoveSlideInterface,
} from "./SliteWeekHotsInterface";

const SlideWeekHotsComponent = styled.article`
  width: 400px;
  height: 100%;
  position: relative;
  @media (max-width: 800px) {
    padding: 5rem 0;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ContainerSlideWeek = styled.div`
  width: 100%;
  height: 100%;
`;

const WrapperSlideWeek = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContainerMoveSlide = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SeguraSlide = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MoveSlide = styled.div<MoveSlideInterface>`
  width: 100%;
  height: 300px;
  flex-shrink: 0;
  transform: translateY(${(props) => props.moveY});
  transition: 0.3s ease-out;
`;

const FotoSlideWeek = styled.div<FotoSlideWeekInterface>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70%;
`;

const NavSlideWeek = styled.nav`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ListaSlideWeek = styled.ul`
  list-style: none;
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ItemSlide = styled.li<ItemSlideInterface>`
  width: 3rem;
  height: 3rem;
  border: ${(props) => (props.borderColor ? "2px solid #f5c616" : "")};
  background: #fff;
  cursor: pointer;
  z-index: 1;
`;

const ItemSlideFoto = styled.div<ItemSlideFotoInterface>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 50% 50%;
`;

const ContainerButtons = styled.div`
  top: 0;
  left: -5%;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const ButtoNext = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: #f5c616;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: 0px 0px 0px 6px #e2be3b;
    box-shadow: 0px 0px 0px 6px #e2be3b;
  }
`;

const ButtoPrev = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  background-color: #f5c616;
  &:hover {
    -webkit-box-shadow: 0px 0px 0px 6px #e2be3b;
    box-shadow: 0px 0px 0px 6px #e2be3b;
  }
`;

export {
  SlideWeekHotsComponent,
  ContainerSlideWeek,
  WrapperSlideWeek,
  SeguraSlide,
  FotoSlideWeek,
  ContainerButtons,
  ButtoNext,
  ButtoPrev,
  ContainerMoveSlide,
  MoveSlide,
  NavSlideWeek,
  ListaSlideWeek,
  ItemSlide,
  ItemSlideFoto,
};
