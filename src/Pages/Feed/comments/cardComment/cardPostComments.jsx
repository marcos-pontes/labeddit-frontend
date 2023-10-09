import { Container, BordLike, BordComment, Like, Comment } from "./StyledCardComment";
import { PiArrowFatUpFill, PiArrowFatDownFill } from "react-icons/pi";
import { BiSolidMessageRoundedEdit, BiMessage } from "react-icons/bi";
import { likeDislikePost } from "../../../../API/api";
import { useState } from "react";


const CardPostComent = (props) => {
  const [likes, setLikes] = useState(props.like);
  const [dislikes, setDislikes] = useState(props.dislike);
  const [amount] = useState(props.amount);
  const [checkLike, setCheckLike] = useState();
  const [checkDisliked, setCheckDisliked] = useState();



  function formatNumbr(numero) {
    if(numero === null){
      return 0
    }
    if (numero >= 1000) {
      return (numero / 1000).toFixed(1) + "k";
    } else {
      return numero.toString();
    }
  }

  const likesDislikes = async (like) => {
    const token = localStorage.getItem("token");
    const postId = props.postId;

    try {
      const response = await likeDislikePost(token, postId, like);

      if (response.status === 201) {
        if (like) {
          if (checkLike) {
            setCheckLike(false);
            setLikes(likes - 1);
          } else {
            setCheckLike(true);
            setLikes(likes + 1);

            if (checkDisliked) {
              setCheckDisliked(false);
              setDislikes(dislikes - 1);
            }
          }
        } else {
          if (checkDisliked) {
            setCheckDisliked(false);
            setDislikes(dislikes - 1);
          } else {
            setCheckDisliked(true);
            setDislikes(dislikes + 1);

            if (checkLike) {
              setCheckLike(false);
              setLikes(likes - 1);
            }
          }
        }
      } else {
        console.error("Erro like/dislike");
      }
    } catch (error) {
      console.error("Erro catch like dislike", error.message);
    }
  };



  return (
    <Container key={props.postId}>
      <p >criado por: {props.creator}</p>
      <div>{props.content}</div>
     
      <div>
        <BordLike>

          <button onClick={() => likesDislikes(true)}>
            <PiArrowFatUpFill color={checkLike ? "green" : "#E0E0E0"} />
          </button>

          <Like>{formatNumbr(likes - dislikes)}</Like>

          <button onClick={() => likesDislikes(false)}>
            <PiArrowFatDownFill color={checkDisliked ? "red" : "#E0E0E0"} />
          </button>

        </BordLike>
        <button >
          <BordComment>

            <BiMessage color="#E0E0E0" overlinePosition="right"  />
            <Comment>{formatNumbr(amount)}</Comment>

          </BordComment>
        </button>
      </div>

    </Container>

  );
};

export default CardPostComent;
