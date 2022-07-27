import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearInput = () => {
    setForm(initialState);
  };
  return {form, onChange, clearInput};
};
