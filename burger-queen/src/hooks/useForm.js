import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const handleChange = (event) => {
    const { name, value } = event.target; //destructurar el objeto event.target
    setForm({
      ...form, //le pasamos una copia del estado del fomulario
      [name]: value,
    });
  };
  const handleBlur = (event) => {
    handleChange(event);
    setError(validateForm(form)); //llegar con los errores en el formulario
  };
  const handleSubmit = (event) => {};
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
