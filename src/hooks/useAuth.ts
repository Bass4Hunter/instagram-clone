import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { LoginData } from "./useForm";
import { LoginResponse } from "../types/Responses";
import jwt_decode from "jwt-decode";
import { Token } from "../types/Token";

export default function useAuth() {
  const navigate = useNavigate();
  const { setUser, setMessage, setStatus } = useContext(GlobalContext);
  const [error, setError] = useState(null);

  // //set user
  // const setUserContext = async () => {
  //   return await axios
  //     .get("/user")
  //     .then((res) => {
  //       setUser(res.data.currentUser);
  //       navigate("/main_feed");
  //     })
  //     .catch((err) => {
  //       setError(err.response.data);
  //     });
  // };

  // //register user
  const registerUser = async () => {
    // console.log(data);
    // const { username, email, password, passwordConfirm } = data;
    // return axios
    //   .post(`auth/register`, {
    //     username,
    //     email,
    //     password,
    //     passwordConfirm,
    //   })
    //   .then(async () => {
    //     await setUserContext();
    //   })
    //   .catch((err) => {
    //     return setError(err.response.data);
    //   });
    return;
  };

  //login user
  const loginUser = async (loginData: LoginData) => {
    const { username, password } = loginData;

    await axios
      .post(
        "https://instagram-clone-server-deploy.herokuapp.com/auth",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data as LoginResponse;
        const decoded = jwt_decode<Token>(data.token);
        if (!setUser) {
          throw Error("No context user");
        }
        setUser({ username: decoded.name, token: data.token });
        if (!setMessage) return;
        if (!setStatus) return;
        setMessage("Logged");
        setStatus("SUCCESS");
        navigate("/main_feed");
      })
      .catch((error) => {
        if (!setMessage) return;
        if (!setStatus) return;
        setMessage("Invalid Credential");
        setStatus("ERROR");
      });

    return;
  };

  return {
    registerUser,
    loginUser,
    error,
  };
}
