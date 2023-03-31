import { createContext } from "react";
import { Status } from "../types/Status";
import { User } from "../types/User";

type AppContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>> | null;
  isLoading: boolean;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>> | null;
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>> | null;
};
//set initial value of user to null (pre-login)
export const GlobalContext = createContext<AppContext>({
  user: null,
  setUser: null,
  isLoading: true,
  message: "",
  status: "SUCCESS",
  setStatus: null,
  setMessage: null,
});
