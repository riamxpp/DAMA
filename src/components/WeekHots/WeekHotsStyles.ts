import styled from "styled-components";
import { colors } from "../../colors";

const WeekHotsComponent = styled.section`
  width: 100%;
  height: 500px;
  background-color: ${colors.mainHeader};
  padding: 2rem 0;
  @media (max-width: 800px) {
    height: auto;
  }
`;

const WrapperContent = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  @media (max-width: 950px) {
    width: 750px;
    align-items: center;
  }
  @media (max-width: 800px) {
    width: 90%;
    height: auto;
    flex-direction: column;
  }
`;

export { WeekHotsComponent, WrapperContent };
