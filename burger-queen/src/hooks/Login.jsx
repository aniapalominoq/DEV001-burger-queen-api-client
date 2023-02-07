import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    const [datos, setDatos] = useState({
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
    }
  return (
    
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
      </Form>
    

  )
}
export default Login