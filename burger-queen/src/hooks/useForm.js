import { useState } from "react";
import { heplHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
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
    setErrors(validateForm(form)); //llegar con los errores en el formulario
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(form)); //que no existan errores
    if (Object.keys(errors).length === 0) {
      alert("enviando formulario");
      setLoading(true);
      //--------------------------
      heplHttp()
        .post("http://localhost:5000/login", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
        });
      //----------------------------
    } else {
      return;
    }
  };
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
