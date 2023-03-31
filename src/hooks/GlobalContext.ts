import { createContext } from "react";
import { User } from "../types/User";

type AppContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>> | null;
  isLoading: boolean;
};
//set initial value of user to null (pre-login)
export const GlobalContext = createContext<AppContext>({
  user: null,
  setUser: null,
  isLoading: true,
});
