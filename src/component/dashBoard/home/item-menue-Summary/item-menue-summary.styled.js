import styled from "styled-components";

export const MenueSummaryDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 20% 20% 20% 20% auto;
  justify-items: self-start;
  align-items: center;
  overflow: auto;
  padding-top: 2em;
  padding-left: 1em;
`;

export const Items = styled.h2`
  font-size: 0.6em;
  font-family: "Montserrat";
  color: #291563;
`;

export const ItemStatusHolder = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  justify-content: space-between;
`;
