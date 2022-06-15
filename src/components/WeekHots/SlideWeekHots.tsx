import React, { useRef, useState } from "react";
import ArrowDown from "../Icos/ArrowDown";
import ArrowUp from "../Icos/ArrowUp";
import { mudaSlideAoClick } from "../reusable/mudaSlideAoClick";
import {
  ButtoNext,
  ButtoPrev,
  ContainerButtons,
  ContainerMoveSlide,
  ContainerSlideWeek,
  FotoSlideWeek,
  ItemSlide,
  ItemSlideFoto,
  ListaSlideWeek,
  MoveSlide,
  NavSlideWeek,
  SeguraSlide,
  SlideWeekHotsComponent,
  WrapperSlideWeek,
} from "./SlideWeekHotsStyles";
const headphone1 = require("../../assents/HeadphoneJbl-1.png");
const headphone2 = require("../../assents/HeadphoneJbl-2.png");
const headphone3 = require("../../assents/HeadphoneJbl-3.png");

const SLIDE_INITIAL = 1;
const LAST_SLIDE = 3;
const SlideWeekHots = () => {
  const [slidePositon, setSlidePosition] = useState(SLIDE_INITIAL);
  const [moveSlideLen, setMoveSlideLen] = useState(0);

  const widthSlidRef = useRef<HTMLDivElement>(null);

  function moveUpSlide() {
    if (slidePositon !== SLIDE_INITIAL) {
      setSlidePosition((prev) => (prev -= 1));
      setMoveSlideLen(
        (prev) => (prev += Number(widthSlidRef.current?.offsetHeight))
      );
    }
  }
  function moveDownSlide() {
    if (slidePositon !== LAST_SLIDE) {
      setSlidePosition((prev) => (prev += 1));
      setMoveSlideLen(
        (prev) => (prev -= Number(widthSlidRef.current?.offsetHeight))
      );
    }
  }

  return (
    <SlideWeekHotsComponent>
      <ContainerSlideWeek>
        <WrapperSlideWeek>
          {/* slide */}
          <ContainerMoveSlide>
            <SeguraSlide>
              <MoveSlide moveY={`${moveSlideLen}px`}>
                <FotoSlideWeek
                  ref={widthSlidRef}
                  backgroundImg={headphone1}
                ></FotoSlideWeek>
                <FotoSlideWeek backgroundImg={headphone2}></FotoSlideWeek>
                <FotoSlideWeek backgroundImg={headphone3}></FotoSlideWeek>
              </MoveSlide>
            </SeguraSlide>
          </ContainerMoveSlide>

          {/* nav slide */}
          <NavSlideWeek>
            <ListaSlideWeek>
              <ItemSlide
                onClick={() =>
                  mudaSlideAoClick(
                    1,
                    slidePositon,
                    setMoveSlideLen,
                    widthSlidRef,
                    setSlidePosition
                  )
                }
                borderColor={slidePositon === 1}
              >
                <ItemSlideFoto backgroundImg={headphone1}></ItemSlideFoto>
              </ItemSlide>

              <ItemSlide
                onClick={() =>
                  mudaSlideAoClick(
                    2,
                    slidePositon,
                    setMoveSlideLen,
                    widthSlidRef,
                    setSlidePosition
                  )
                }
                borderColor={slidePositon === 2}
              >
                {" "}
                <ItemSlideFoto backgroundImg={headphone2}></ItemSlideFoto>
              </ItemSlide>

              <ItemSlide
                onClick={() =>
                  mudaSlideAoClick(
                    3,
                    slidePositon,
                    setMoveSlideLen,
                    widthSlidRef,
                    setSlidePosition
                  )
                }
                borderColor={slidePositon === 3}
              >
                {" "}
                <ItemSlideFoto backgroundImg={headphone3}></ItemSlideFoto>
              </ItemSlide>
            </ListaSlideWeek>
          </NavSlideWeek>
        </WrapperSlideWeek>
      </ContainerSlideWeek>
      {/* buttons slide */}
      <ContainerButtons>
        <ButtoNext
          disabled={slidePositon === SLIDE_INITIAL}
          onClick={moveUpSlide}
        >
          <ArrowUp />
        </ButtoNext>
        <ButtoPrev
          disabled={slidePositon === LAST_SLIDE}
          onClick={moveDownSlide}
        >
          <ArrowDown />
        </ButtoPrev>
      </ContainerButtons>
    </SlideWeekHotsComponent>
  );
};

export default SlideWeekHots;
