import { useState } from "react";
import { Post } from "../types/Post";

export type LoginData = {
  username: string;
  password: string;
};

export default function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    handleChange,
    values,
  };
}
