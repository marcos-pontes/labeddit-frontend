import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  button {
    margin-top: 1.5rem;
  }

  h2 {
    font-size: 33px;
    width: 364px;
    font-weight: 700;
    margin-bottom: 8rem;
    font-family: "IBM Plex Sans";
  }
  p {
    color: #000000;
    margin-bottom: 1rem;

    font-size: 14px;
    font-family: "Noto Sans";
    font-weight: 500;
    word-wrap: break-word;
  }
  label {
    font-size: 14px;
font-family: "Noto Sans";
font-weight: 500;
word-wrap: break-word
  }
`;
export const DivAlign = styled.div`
  align-self: center;
  width: 88%;
  justify-content: center;
  div {
    margin-left: 2rem;
    width: 100%;
    a {
      color: #4088cb;
    }
  }
`;
export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #000000;
  width: 100%;
  gap: 7px;
  input {
    width: 18px;
    height: 18px;
  }
`;
