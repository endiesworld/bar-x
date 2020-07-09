import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 85%;
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid #291563;
  width: 100%;
  height: 2em;
`;

export const Label = styled.label`
  color: #291563;

  margin-top: 1em;
  font-size: 13px;
`;

export const Select = styled.select`
  width: 100%;
  height: 2em;
`;

export const GroupElement = styled.div`
  margin-top: 0.1em;
  height: 3em;
  width: 12em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
