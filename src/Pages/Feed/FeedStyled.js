import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  button {
    border-radius: 12px;
    font-size: 18px;
    font-family: IBM Plex Sans;
    font-weight: 700;
    word-wrap: break-word;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  textarea {
    background-color: lightgray;
    border-radius: 12px;
    background-color: #ededed;
    width: 84%;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 1rem;
    resize: none;
    font-family: IBM Plex Sans;
    weight: 400;
    size: 18px;
    line-height: 23.4px;
  }
`;

export const Divisor = styled.span`
  height: 1px;
  background: linear-gradient(to right, #ff6489 20%, #f9b24e 110%);
  width: 21rem;
  margin: 1rem 0 1rem 1.7rem;
  display: flex;
  justify-content: center;
`;
