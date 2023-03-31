import React, { FC, ReactElement } from "react";
import useAuth from "../../hooks/useAuth";
import useForm, { LoginData } from "../../hooks/useForm";
import Header from "../elements/Header";
import Snackbar from "../elements/SnackBar";

type Props = {};

const Login: FC<Props> = (): ReactElement => {
  const { values, handleChange } = useForm({
    username: "",
    password: "",
  });

  const { loginUser, error } = useAuth();

  const handleSubmit = async () => {
    await loginUser(values);
  };

  return (
    <div className="flex h-screen">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-gray-200 shadow p-5">
        <Header />
        <h2 className="text-xl font-bold mb-5">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="username"
            value={values.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleSubmit}
            className="w-full bg-secondary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
