import { Container, Exit } from "./MenuStyled";
import logo from "../../assets/Group 3.svg";
import { useNavigate, useParams } from "react-router-dom";
import { goToFeed, goToLogin } from "../../Routes/Cordinator";
import { AiOutlineClose } from "react-icons/ai";

const Menu = ({ navi }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const tokenExist = () => {
    goToLogin(navigate);
    if (token !== undefined) {
      localStorage.setItem("token", "");
    }
  };
  const { postId } = useParams()


  return (
    <>{postId ? <Container>
      <Exit><AiOutlineClose fontSize={"35px"} color="#A3A3A3" onClick={() => goToFeed(navigate)} /></Exit>
      <img src={logo} alt="" onClick={() => goToFeed(navigate)} />
      <button onClick={() => tokenExist()}>{navi}</button>

    </Container> : <Container>
      <img src={logo} alt="" onClick={() => goToFeed(navigate)} />
      <button onClick={() => tokenExist()}>{navi}</button>

    </Container>}

    </>

  );
};

export default Menu;
