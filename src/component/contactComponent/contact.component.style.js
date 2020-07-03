import styled from "styled-components";
import { ReactComponent as skyJet } from "../../assets/contact-us.svg";

export const ContactPageParent = styled.div`
  width: 100vw;
  height: 93vh;
  background-color: #291563;
`;

export const ImageAndDetailsHolder = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
`;

export const ImageHolder = styled(skyJet)`
  width: 60%;
  height: 100%;
`;

export const MessageHolder = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Message = styled.p`
  color: #ffffff;
  font-family: regular Montserrat;
`;
export const BarX = styled.span`
  color: #ffba00;
  font-family: "PT Sans", sans-serif;
`;

export const MessageBox = styled.form`
  position: relative;
  bottom: 15%;
  width: 70%;
  height: 60%;
  font-family: "PT Sans", sans-serif;
`;

export const EmailHolder = styled.div`
  width: 90%;
  margin-top: 4%;
  display: flex;
  border: solid 1px #fff;
  margin-left: 3%;
  border-radius: 4px;
`;

export const EmailLabel = styled.label`
  background-color: #fff;
  color: #291563;
  width: 35%;
  border-radius: 4px;
`;

export const Emailinput = styled.input`
  background-color: #fff;
  color: #291563;
  width: 65%;
  border: 0px;
  background-color: #291563;
  font-family: "PT Sans", sans-serif;
`;

export const TextAreaHolder = styled.div`
  width: 90%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  height: 50%;
`;

export const TextArea = styled.textarea`
  color: #fff;
  width: 100%;
  background-color: #291563;
  font-size: 70%;
  font-family: "PT Sans", sans-serif;
  height: 100%;
  border: solid 1px #fff;
`;
