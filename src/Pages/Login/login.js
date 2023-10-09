import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  div {
    text-align: center;

    img {
      margin: 0 auto;
      width: 84px;
      height: 84px;
      margin-top: 5em;
    }
    h1 {
      color: #373737;
      font-size: 36px;
      font-family: IBM Plex Sans;
      font-weight: 700;
      word-wrap: break-word;
    }
    p {
      color: #000000;
      margin-bottom: 5rem;
      font-size: 16px;
      font-family: IBM Plex Sans;
      font-weight: 300;
      word-wrap: break-word;
    }
  }
`;

export const ButtonStyled = styled.button`
  color: #fe7e02;
  background: white;
  width: 21rem;
  height: 51px;
  margin: 0 auto;
  border: 1px solid #fe7e02;
  border-radius: 27px;
  margin-bottom: 5rem;
  font-size: 18px;
  font-family: Noto Sans;
  font-weight: 700;
  word-wrap: break-word;
`;

export const Divisor = styled.span`
  height: 1px;
  background: linear-gradient(to right, #ff6489 20%, #f9b24e 110%);
  width: 21rem;
  margin: 0 auto;
`;
