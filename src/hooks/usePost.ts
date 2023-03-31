import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { LoginData } from "./useForm";
import { LoginResponse } from "../types/Responses";
import jwt_decode from "jwt-decode";
import { Token } from "../types/Token";
import { Post } from "../types/Post";

export default function usePost() {
  const navigate = useNavigate();
  const { setMessage, setStatus, user } = useContext(GlobalContext);
  const [error, setError] = useState(null);

  const getUserPosts = async () => {
    if (!user) {
      throw Error("No user");
    }

    const response = await axios.get(
      `https://instagram-clone-server-deploy.herokuapp.com/post/${user.username}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: user?.token,
        },
      }
    );

    //   .then(() => {
    //     if (!setMessage) return;
    //     if (!setStatus) return;
    //     setMessage("Uploaded");
    //     setStatus("SUCCESS");
    //     navigate("/main_feed");
    //   })
    //   .catch(() => {

    //   });
    return response.data as Post[];
  };

  const getPosts = async () => {
    if (!user) {
      throw Error("No user");
    }

    const response = await axios.get(
      "https://instagram-clone-server-deploy.herokuapp.com/post",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: user?.token,
        },
      }
    );

    //   .then(() => {
    //     if (!setMessage) return;
    //     if (!setStatus) return;
    //     setMessage("Uploaded");
    //     setStatus("SUCCESS");
    //     navigate("/main_feed");
    //   })
    //   .catch(() => {

    //   });
    return response.data as Post[];
  };

  const sendPost = async (data: Post) => {
    const { title, imageSource, from } = data;

    if (!user) {
      throw Error("No user");
    }

    await axios
      .post(
        "https://instagram-clone-server-deploy.herokuapp.com/post/create",
        { title, imageSource, from },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: user?.token,
          },
        }
      )
      .then(() => {
        if (!setMessage) return;
        if (!setStatus) return;
        setMessage("Uploaded");
        setStatus("SUCCESS");
        navigate("/main_feed");
      })
      .catch(() => {
        if (!setMessage) return;
        if (!setStatus) return;
        setMessage("Something wen wrong!");
        setStatus("ERROR");
      });

    return;
  };

  return {
    sendPost,
    getPosts,
    getUserPosts,
    error,
  };
}
