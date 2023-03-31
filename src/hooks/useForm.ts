//@ts-nocheck
import { useState } from "react";

export type LoginData = {
  username: string;
  password: string;
};

export default function useForm(initialValues: LoginData) {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (event) => {
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
