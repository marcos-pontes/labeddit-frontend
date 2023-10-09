import ButtonPage from "../../../componetes/Button/Button";
import Menu from "../../../componetes/Menu/Menu";
import { Container, Divisor } from "./StyledComments";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { comments, createComment, getPostById, post } from "../../../API/api";
import { goToComments, goToLogin } from "../../../Routes/Cordinator";
import { useNavigate, useParams } from "react-router-dom";
import useForms from "../../../hooks/useForms";
import useProtectedPage from "../../../hooks/useProtectPage";
import CardComment from "./cardComment/cardComment";
import CardPostComent from "./cardComment/cardPostComments";
import { GlobalContext } from "../../../context/GlobalContext";
import { LoadingPage } from "../../../componetes/Loading/Loading";

const CommentsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { form, onChange } = useForms({ content: "" });
  const [isLoad, setIsLOad] = useState(false)
  const context = useContext(GlobalContext);
  const { dataPostComment,
    setDataPostComment,
    dataComment,
    setDataComment,
  } = context;


  const { postId } = useParams();


  const renderComment = async () => {
    try {
      const response = await comments(postId, token);
      if (!response) {
        goToLogin(navigate);
      }
      const result = response;
      if(result){
        setIsLOad(true)
      }

      return setDataComment(result.data.reverse());
    } catch (error) {
      return error.message;
    }
  };

  const renderPost = async () => {
    try {
      const response = await getPostById(postId, token);
      if (!response) {
        goToLogin(navigate);
      }
      const result = response
      

      return setDataPostComment(result.data);
    } catch (error) {
      return error.message;
    }
  };
 


  const createComments = async () => {
    const body = {
      content: form.content,
    };

    try {
      const result = await createComment(token, body, postId);
      if (result) {
        goToComments(navigate);
      }
    } catch (error) {
      console.error("Erro ao criar comentário", error.message);
    }
  };



  const verificaLikeDislike = (post) => {
    const userLikesPost = post.likes;

    return {
      initialLike: userLikesPost > 0,
      initialDislike: userLikesPost < 0,
    };
  };

  /* const decode = (token) => {
    try {
      const { decodedToken, isExpired } = useJwt(token);
      const userId = decodedToken.id;
      setTokenId(userId);
      console.log(userId);
    } catch (error) {
      console.error('Erro ao decodificar o token JWT', error);
    }
  };
  */


  useEffect(() => {
    renderPost();
    renderComment();


  }, []);



  return (
    <>{isLoad ? <><motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Menu navi={"Logout"} />
        <div>
          {dataPostComment.map((post) => {
            return (
              <CardPostComent
                key={post.id}
                creator={post.creator.name}
                content={post.content}
                like={post.likes}
                dislike={post.dislikes}
                postId={post.id}
                amount={post.amountComments}

              />
            );
          })}
        </div>
        <form onSubmit={createComments}>
          <textarea
            cols="30"
            rows="4"
            placeholder="Escreva seu comentario..."
            name="content"
            id="content"
            type="content"
            onChange={onChange}
            required
          ></textarea>
          <label htmlFor="post"></label>
          <ButtonPage button={"Postar"} />
          <Divisor />
        </form>
      </Container>

    </motion.div>
      {dataComment.map((post) => {
        return (
          <CardComment
            key={post.id}
            creator={post.creator.name}
            content={post.content}
            like={post.likes}
            dislike={post.dislikes}
            postId={post.id}
          />
        );
      })}</> : <LoadingPage />}

    </>
  );
};

export default CommentsPage;
