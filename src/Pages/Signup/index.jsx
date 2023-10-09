import { Input } from "@chakra-ui/react";
import { CheckBox, Container, DivAlign } from "./SignupStyled";
import ButtonPage from "../../componetes/Button/Button";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/Cordinator";
import { motion } from "framer-motion";
import Menu from "../../componetes/Menu/Menu";
import useForms from "../../hooks/useForms";

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ModalErrorSignup } from "../../componetes/Modal/modalSignup";

const Signup = () => {
  const navigate = useNavigate();
  const { form, onChange } = useForms({ name:"",email: "", password: "" })

  const context = useContext(GlobalContext);
  const { modal, insertUser}=  context

  const handleSubmit = async (e) => {
    e.preventDefault()
        const body = {
          name: form.name,
          email: form.email,
          password: form.password
        };
        try {
          const response = await insertUser(body);
          if(response){
            goToFeed(navigate)
          }
          localStorage.setItem("token", response.data.token);
          return response.data
        } catch (error) {
          return error.message
        }
      };


  return ( <>{modal? <ModalErrorSignup/>: <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <Container>
    <Menu navi={"Entrar"} />
    <DivAlign>
      <h2>Olá, boas vindas ao LabEddit ;)</h2>
    </DivAlign>
    <form onSubmit={handleSubmit}>
      <Container>
        <Input
          htmlSize={4}
          width="21rem"
          placeholder="Apelido"
          border={"1px solid lightgray"}
          margin="0 auto"
          height="60px"
          borderRadius="0.3rem"
          type="name"
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
        <Input
          htmlSize={4}
          width="21rem"
          placeholder="E-mail"
          border={"1px solid lightgray"}
          margin="0 auto"
          height="60px"
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
      <DivAlign>
        <div>
          <p>
            Ao continuar, você concorda com o nosso{" "}
            <a>Contrato de usuário</a> e nossa{" "}
            <a>Política de Privacidade</a>
          </p>
        </div>
        <CheckBox>
          <input type="checkbox" id="concordo" name="concordo" />
          <label htmlFor="concordo">
            Eu concordo em receber emails sobre coisas legais no Labeddit
          </label>
        </CheckBox>
      </DivAlign>
      <ButtonPage button={"Cadastrar"} />
    </form>
  </Container>
</motion.div>}
 
  </>
    
  );
};

export default Signup;
