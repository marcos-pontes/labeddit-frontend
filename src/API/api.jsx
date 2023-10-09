import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { useJwt } from "react-jwt";




export const insertUser = async (postData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, postData);
    return response;
  } catch (error) {
    console.log(error.response.data[0].message);
  }
};

export const post = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};
export const comments = async (postId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/comment/${postId}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};
export const getPostById = async (id, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};
export const createPosts = async (token, postContent) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, postContent, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};
export const createComment = async (token, postContent, postId) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts/comment/${postId}`, postContent, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};


export const deletePosts = async (token, idToDelete) => {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${idToDelete}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};

export const updatePosts = async (token, postData) => {};

export const likeDislikePost = async (token, postId, like) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/posts/${postId}/like`,
      {
        like: like,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};
