import "./Login.css";
// import Loader  from "../../components/Loarder/Loader";
import PrivateRoute from "../../components/router/PrivateRoute";
import { useAuthContext } from "../../Context/authContext";
import { useState } from "react";

const {isAuthenticated} = useAuthContext; 


// const validateForm = (form) => {
//   let errors = {};

//   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

//   if (!form.email.trim()) {
//     errors.email = "El campo email es requerido";
//   } else if (!regexEmail.test(form.email.trim())) {
//     errors.email = "El campo 'email' es incorrecto";
//   }
//   if (!form.password.trim()) {
//     errors.password = "El campo 'password' es requerido";
//   }

//   return errors;
// };

const Login = () => {
  const {peticion} = useAuthContext();
  const [form, setForm] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target; //destructurar el objeto event.target
    setForm({
      ...form, //le pasamos una copia del estado del fomulario
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    handleChange(event);
    // setErrors(validateForm(form)); //llegar con los errores en el formulario
  };
  const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
        peticion(event.target.email.value, event.target.password.value)
        // setErrors(validateForm(form)); //que no existan errores
        // if (Object.keys(errors).length === 0) {
        //   alert("enviando formulario");
        //   setLoading(true);
        
          
        // } else {
        //   return ;
        // }
      };
  return (
    <section className="container">
      <form className="container-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Burguer Queen</h1>
        <div className="field">
          <label className="label">Email</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
          {/* {errors.email && <p className="help is-danger">{errors.email}</p>} */}
        </div>
        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.password}
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-eye"></i>
            </span>
          </p>
          {/* {errors.password && (
            {/* <p className="help is-danger">{errors.password}</p> */}
          {/* )} */}
        </div>
        <div className="btn-control">
          <input className="button" type="submit" value="Sign In" />
        </div>
      </form>
     {/* { loading && <Loader/>} */}
     {isAuthenticated && <PrivateRoute/>}
 
    </section>
  );
};
export default Login;
