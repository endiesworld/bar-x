import styled from "styled-components";

export const WorkEnvironmentDiv = styled.div`
  width: ${(props) => (props.deviceType !== "large" ? "100%" : "80%")};
  height: ${(props) => (props.deviceType !== "large" ? "auto" : "auto")};
`;
