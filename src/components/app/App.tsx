import Header from "../elements/Header";
import Navigation from "../elements/Navigation";
import MainFeed from "../views/MainFeed";
import "@fontsource/noto-sans-jp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewPost from "../views/NewPost";
import Profile from "../views/Profile";
import ProtectedRoute from "../elements/ProtectedRoute";
import Login from "../views/Login";
import useFindUser from "../../hooks/useFindUser";
import { GlobalContext } from "../../hooks/GlobalContext";
import Snackbar from "../elements/SnackBar";
import { useState } from "react";
import { Status } from "../../types/Status";

export default function App() {
  const { user, setUser, isLoading } = useFindUser();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("SUCCESS");

  return (
    <BrowserRouter>
      <GlobalContext.Provider
        value={{
          user,
          setUser,
          isLoading,
          message,
          status,
          setStatus,
          setMessage,
        }}
      >
        <div
          className="flex justify-center items-center min-h-screen max-h-screen bg-gray-200"
          style={{ fontFamily: "Noto Sans JP" }}
        >
          <div className="w-[435px] flex flex-col min-h-screen max-h-screen bg-primary">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/main_feed"
                element={
                  <ProtectedRoute
                    isAuthenticated={!!user}
                    redirectTo={"/login"}
                  >
                    <Header />
                    <MainFeed />
                    <Navigation />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/new_post"
                element={
                  <ProtectedRoute
                    isAuthenticated={!!user}
                    redirectTo={"/login"}
                  >
                    <Header />
                    <NewPost />
                    <Navigation />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    isAuthenticated={!!user}
                    redirectTo={"/login"}
                  >
                    <Header />
                    <Profile user={user!} />
                    <Navigation />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Snackbar />
          </div>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}
