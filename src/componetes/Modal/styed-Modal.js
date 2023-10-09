import styled from "styled-components"


export const Modall = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter:blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:10;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 0.7rem;
  color:black;
  width:26rem;
  height:12rem;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Poppins' sans-serif;
font-weight:bolder;
h1{
  justify-self:center;
  font-family:Arial, Helvetica, sans-serif;
  font-weight:bolder;
  font-size:3rem
}
`;

export const Exit = styled.button`
background-color:#FFFFFF;
color:black;
transform:translate(520% , -40%);


`