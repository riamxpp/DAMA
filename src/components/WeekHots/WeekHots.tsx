import React from "react";
import SlideWeekHots from "./SlideWeekHots";
import WeekHotsInfo from "./WeekHotsInfo";
import { WeekHotsComponent, WrapperContent } from "./WeekHotsStyles";

const WeekHots = () => {
  return (
    <WeekHotsComponent>
      <WrapperContent>
        <SlideWeekHots />
        <WeekHotsInfo />
      </WrapperContent>
    </WeekHotsComponent>
  );
};

export default WeekHots;
