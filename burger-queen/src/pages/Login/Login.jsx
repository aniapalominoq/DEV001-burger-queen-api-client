import { useForm } from "../../hooks/useForm";
import "./Login.css";

const initialForm = {};
const validationForm = () => {};

const Login = () => {
  const {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm);

  /*  const [datos, setDatos] = useState({
      Email:'',
      Password: '',
    });

    const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
      })
    }
    const enviarDatos = (event) => {
      event.preventDefault();
    } */
  return (
    /*
    <Form className="container-form" onSubmit={enviarDatos}>
        <h1 className="form-title"> Burguer Queen</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='Email' onChange={handleInputChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='Password' onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form> */
    <section className="container">
      <form className="container-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Burguer Queen</h1>
        <div class="field">
          <label class="label">Email</label>
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
        </div>
        <div class="field">
          <label class="label">Email</label>
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
        </div>
        <div class="btn-control">
          <input class="button" type="submit" value="Sign In" />
        </div>
      </form>
    </section>
  );
};
export default Login;
