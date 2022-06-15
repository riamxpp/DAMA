import styled from "styled-components";
import { colors } from "../../colors";

const WeekHotsComponent = styled.section`
  width: 100%;
  height: 500px;
  background-color: ${colors.mainHeader};
  padding: 2rem 0;
`;

const WrapperContent = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
`;

export { WeekHotsComponent, WrapperContent };
