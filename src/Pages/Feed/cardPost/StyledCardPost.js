import styled from "styled-components";

export const Container = styled.div`
  width: 339px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  background-color: #fbfbfb;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 9px 10px 9px 10px;
  p {
    font-size: 12px;
    color: #6f6f6f;
    font-size: 12px;
    font-family: IBM Plex Sans;
    font-weight: 400;
    word-wrap: break-word;
  }
  div {
    color: black;
font-size: 18px;
font-family: IBM Plex Sans;
font-weight: 400;
word-wrap: break-word;
display: flex;
  }
`;
export const Like = styled.span`
text-align: center;
color: #6F6F6F;
font-size: 9.56px;
font-family: IBM Plex Sans;
font-weight: 700;
word-wrap: break-word;
margin-top: 2px;
`
export const BordLike = styled.div`
  width: 98px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 28px;
  padding: 5px;
`;
export const BordComment = styled.div`
  width: 66px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 28px;
  padding: 5px;
  margin-left: 11px;
`;
export const Edit = styled.div`
  max-width: 66px;
  
  transform: translate(290px, -80px);
`;
export const Delete = styled.button`
  max-width: 66px;
  max-height: 1px;
 
  transform: translate(290px, 30px);
`;
export const Comment = styled.span`
text-align: center;
color: #6F6F6F;
font-size: 9.56px;
font-family: IBM Plex Sans;
font-weight: 700;
word-wrap: break-word;
margin: 2px 10px 0 0;
`