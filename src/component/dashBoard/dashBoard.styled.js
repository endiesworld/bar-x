import styled from "styled-components";

export const WorkenvironmentParentDiv = styled.div`
  position: relative;
  top: 10%;
  height: ${(props) => (props.deviceType === "mobile" ? "auto" : "90%")};
  width: 100%;
  display: flex;
`;
