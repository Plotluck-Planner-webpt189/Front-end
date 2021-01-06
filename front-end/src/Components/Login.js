import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

const initialCredentials = {
  username: "",
  password: ""
};

let Login = props => {

  const [credentials, setCredentials] = useState(initialCredentials);
    // let [username, handleUsername] = Input("");
    // let [password, handlePassword] = Input("");

    // let history = useHistory();
  
    // let handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   let data = {
    //     username: username,
    //     password: password,
    //   };
  
  
    // };
    const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
    };

    const login = e => {
      e.preventDefault();
      axios
        .post(
          "",
          credentials
        )
        .then(res => {
          console.log("Login Response", res);
          window.localStorage.setItem("token", res.data.token);
          props.history.push(`/profile/${res.data.id}`);
        })
        .catch(err => console.log("Login Error", err));
      setCredentials(initialCredentials);
    };

  return (
    <Form>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
        <FormGroup>
          <Label>Username</Label>
          <Input
            required
            id="username"
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            required
            id="password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </FormGroup>


        <Button type="submit" onClick={Login}>
          Submit
        </Button>
        <p>Don't have an account? Sign up<Link to="/Register"> here!</Link></p>
        </Col>
        <Col md=""></Col>
        </Row>
    </Form>
      );
    };
    
    export default Login;