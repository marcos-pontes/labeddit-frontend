import React, { useContext, useState } from "react";
import { Modall, ModalContent, Exit } from "./styed-Modal";
import { GlobalContext } from "../../context/GlobalContext";

export const ModalErrorSignup = () => {
  const context = useContext(GlobalContext)
  
  const { errorSignup , setModal} = context;
  

  const handleOutSideClick = (e , id ) => {
    if (e.target.id === "id") { 
      setModal(false);
    }
  };
 

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "String must contain at least 3 character(s)":
        return "Apelido deve ter pelo menos 3 caracteres"
        
      case "Invalid email":
        return "Email invalido";

      case "String must contain at least 8 character(s)":
        return "Senha deve conter pelo menos 8 caracters";
        
      default:
        return "Email já cadastrado.";
    }
  };
  return (
    <Modall id={"id"} onClick={handleOutSideClick}>
      <ModalContent>
        <div>
          <h1>Error</h1>
          <p>{getErrorMessage(errorSignup)}</p>
        </div>
      </ModalContent>
    </Modall>
  );
};
