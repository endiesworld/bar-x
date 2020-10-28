import styled from "styled-components";

export const HomeParentDiv = styled.div`
  width: ${(props) => (props.deviceType === "mobile" ? "100%" : "100%")};

  height: ${(props) => (props.deviceType === "mobile" ? "100%" : "auto")};
  margin-bottom: 2em;
  margin-top: 5em;
  display: grid;
  grid-template-columns: ${(props) =>
    props.deviceType === "mobile" ? "1fr" : "1fr 1fr"};

  justify-items: center;
  align-items: center;
  row-gap: 15px;
  column-gap: 15px;
`;

export const HomeChildrenDiv = styled.div`
  align-self: center;
  cursor: pointer;

  width: 320px;

  min-height: 250px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  :hover {
    box-shadow: 5px 5px 10px 7px #291563;
  }
  background: #f5f5f5;
`;
export const Board = styled.div`
  margin-top: 1em;
  margin-left: 1em;
  width: 94%;
  min-height: 230px; ;
`;
export const DisplaySubject = styled.div`
  color: #291563;
`;

export const SummaryHolder = styled.div`
  width: 100%;
  height: 95%;
  min-height: 220px;
`;
