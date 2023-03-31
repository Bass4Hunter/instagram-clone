//@ts-nocheck
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { LoginData } from "./useForm";

export default function useAuth() {
  const navigate = useNavigate();
  const { setUser } = useContext(GlobalContext);
  const [error, setError] = useState(null);

  //set user
  const setUserContext = async () => {
    return await axios
      .get("/user")
      .then((res) => {
        setUser(res.data.currentUser);
        navigate("/main_feed");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  //register user
  const registerUser = async (data) => {
    console.log(data);
    const { username, email, password, passwordConfirm } = data;
    return axios
      .post(`auth/register`, {
        username,
        email,
        password,
        passwordConfirm,
      })
      .then(async () => {
        await setUserContext();
      })
      .catch((err) => {
        return setError(err.response.data);
      });
  };

  const loginMockup = async () => {
    setUser({ username: "test", id: "0" });
    navigate("/main_feed");
    console.log("ROUTE", window.location.href);
    return;
  };

  //login user
  const loginUser = async (data: LoginData) => {
    const { username, password } = data;

    return await loginMockup();

    // axios.post('auth/login', {
    //     username,
    //     password,
    // }).then(async () => {
    //     await setUserContext();
    // }).catch((err) => {
    //     setError(err.response.data);
    // })
  };

  return {
    registerUser,
    loginUser,
    error,
  };
}
