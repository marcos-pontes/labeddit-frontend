import ButtonPage from "../../componetes/Button/Button";
import Menu from "../../componetes/Menu/Menu";
import { Container, Divisor } from "./FeedStyled";
import { motion } from "framer-motion";
import CardPost from "./cardPost/cardPost";
import { useContext, useEffect } from "react";
import {  createPosts, post } from "../../API/api";
import { goToFeed, goToLogin } from "../../Routes/Cordinator";
import { useNavigate } from "react-router-dom";
import useForms from "../../hooks/useForms";
import useProtectedPage from "../../hooks/useProtectPage";
import { GlobalContext } from "../../context/GlobalContext";
import { LoadingPage } from "../../componetes/Loading/Loading";

const FeedPage = () => {
  useProtectedPage();


  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { form, onChange } = useForms({ content: "" });

  const context = useContext(GlobalContext);
  const { idPost,
    setIdPost,
    dataPost,
    setDataPost,
    tokenId,
    isLoad,
    setIsLoad,

  } = context;

  const renderPost = async () => {
    try {
      const response = await post(token);
      if (!response) {
        goToLogin(navigate);
      }
      const result = response.data.reverse();
      setIsLoad(true)
      return setDataPost(result);

    } catch (error) {
      return error.message;
    }
  };
  const createPost = () => {
    const body = {
      content: form.content,
    };
    const result = createPosts(token, body);
    if (result) {
      goToFeed(navigate);
    }
    return result;
  };

  const verificaLikeDislike = (post) => {
    const userLikesPost = post.likes;

    return {
      initialLike: userLikesPost > 0,
      initialDislike: userLikesPost < 0,
    };
  };


  /*  const decode = (token) => {
     try {
       const { decodedToken, isExpired } = useJwt(token);
       const userId = decodedToken.id;
       setTokenId(userId);
       console.log(userId);
     } catch (error) {
       console.error('Erro ao decodificar o token JWT', error);
     }
   }; */

  useEffect(() => {
    renderPost();
    /* decode(token); */
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isLoad ? <>
        <Container>
          <Menu navi={"Logout"} />
          <form onSubmit={createPost}>
            <textarea
              cols="30"
              rows="4"
              placeholder="Escreva seu post..."
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
        <div>
          {dataPost.map((post) => {
            const { initialLike, initialDislike } = verificaLikeDislike(post);
            const loggedInUserLiked = post.likes > 0 && post.creator.id === tokenId;

            return (
              <CardPost
                key={post.id}
                creator={post.creator.name}
                content={post.content}
                like={post.likes}
                dislike={post.dislikes}
                postId={post.id}
                amount={post.amountComments}
                initialLike={initialLike}
                initialDislike={initialDislike}
                loggedInUserLiked={loggedInUserLiked}
                idPost={idPost}
                setIdPost={setIdPost}
              />
            );
          })}
        </div>
      </> : <LoadingPage />

      }

    </motion.div>
  );
};

export default FeedPage;
