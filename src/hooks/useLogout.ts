import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export default function useLogout() {
  const { setUser } = useContext(GlobalContext);

  //   const logoutUser = async () => {
  //     try {
  //       await axios({
  //         method: "GET",
  //         url: `auth/logout`,
  //       }).then((res) => {
  //         console.log(res);
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const logoutUser = async () => {
    if (!setUser) return;
    setUser(null);
  };

  return {
    logoutUser,
  };
}
