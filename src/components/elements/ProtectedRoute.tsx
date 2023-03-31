import React from "react";
import {
  Route,
  Outlet,
  RouteProps,
  NavigationType,
  Navigate,
} from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
  redirectTo: string;
  children: React.ReactNode;
};

const ProtectedRoute = ({ isAuthenticated, redirectTo, children }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</> || <Outlet />;
};

export default ProtectedRoute;
