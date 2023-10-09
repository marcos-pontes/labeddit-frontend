import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/BASE_URL";
import axios from "axios";
const GlobalState = (props) => {
  const [idPost,setIdPost] = useState([])
  const [dataPost, setDataPost] = useState([]);
  const [tokenId, setTokenId] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [dataPostComment, setDataPostComment] = useState([]);
  const [dataComment, setDataComment] = useState([]);
  const [errorLogin, setErrorLogin] = useState([])
  const [errorSignup, setErrorSignup] = useState([])
  const [modal, setModal]=useState(false)

  const login = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, data);
      return response;
    } catch (error) {
      console.log(error.response.message)
      setModal(true)
      setErrorLogin(error.response.status)
     
    }
  };

  const insertUser = async (postData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, postData);
      return response;
    } catch (error) {
      setModal(true)
      setErrorSignup(error.response.data[0].message);
    }
  };

 
  const data = {
    idPost,
    setIdPost,
    dataPost,
    setDataPost,
    tokenId,
    setTokenId,
    isLoad,
    setIsLoad,
    dataPostComment,
    setDataPostComment,
    dataComment,
    setDataComment,
    errorLogin,
    setErrorLogin,
    login,
    modal, 
    setModal,
    insertUser,
    errorSignup
  };
  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
