import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToLogin } from "../Routes/Cordinator";
import { isExpired, decodeToken } from "react-jwt";


const useProtectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenDecode = decodeToken(token);
    const expiredToken = isExpired(token)

    if (!token) {
      goToLogin(navigate);
    }
    if(!tokenDecode){
      goToLogin(navigate);
    }
    if(expiredToken){
      goToLogin(navigate);
    }
  }, [navigate]);
};
export default useProtectedPage;
