import { Input } from "@chakra-ui/react";
import logo from "../../assets/Group 3.svg";
import { ButtonStyled, Container, Divisor } from "./login";
import ButtonPage from "../../componetes/Button/Button";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignup } from "../../Routes/Cordinator";
import { motion } from "framer-motion";
import useForms from "../../hooks/useForms";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ModalError } from "../../componetes/Modal/modalLogin";




const LoginPage = () => {
  const navigate = useNavigate();
  const { form, onChange } = useForms({ email: "", password: "" })

  const context = useContext(GlobalContext);
  const { login, errorLogin, modal } = context



  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      email: form.email,
      password: form.password,
    };
    try {
      const response = await login(body);
      if (response) {
        goToFeed(navigate)
      }
      localStorage.setItem("token", response.data.token);
      return response.data
    } catch (error) {
      console.log(error.message)
      return error.message
    }
  };

  return (<>{modal ? <ModalError /> : <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container>
      <div>
        <img src={logo} alt="" />
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Container>
          <Input
            htmlSize={4}
            width="21rem"
            placeholder="E-mail"
            border={"1px solid lightgray"}
            margin="0 auto"
            height="60px"
            p="0 10px"
            borderRadius="0.3rem"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            name="email"
            id="email"
          />
          <Input
            htmlSize={4}
            width="21rem"
            placeholder="Senha"
            border={"1px solid lightgray"}
            margin="0 auto"
            height="60px"
            p="0 10px"
            borderRadius="0.3rem"
            marginBottom="3rem"
            type="password"
            required
            value={form.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </Container>
        <ButtonPage button={"Continuar"} />
      </form>
      <Divisor />
      <ButtonStyled
        onClick={() => goToSignup(navigate)}
      >
        Crie uma conta!
      </ButtonStyled>
    </Container>
  </motion.div>}

  </>

  );
};

export default LoginPage;
