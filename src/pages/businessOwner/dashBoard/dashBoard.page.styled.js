import styled from "styled-components";

export const DashBoardParentDiv = styled.div`
  height: ${(props) => (props.deviceType === "mobile" ? "auto" : "100vh")};
  width: 100%;
`;
