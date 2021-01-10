import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import styled, { css } from 'styled-components';


const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;


const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;


const initalState = {
  name: '',
  email: '',
  message: '',
  gender: ''
};


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
    
      <StyledFormWrapper>
        <StyledForm>
          <h1>Plan A Potluck</h1>
    <Form>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
        <FormGroup>
          <Label>Username</Label>
          <StyledInput
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
          <StyledInput
            required
            id="password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </FormGroup>


        <StyledButton type="submit" onClick={Login}>
          Submit
        </StyledButton>
        <p>Don't have an account? Sign up<Link to="/Register"> here!</Link></p>
        </Col>
        <Col md=""></Col>
        </Row>
    </Form>
    </StyledForm>
    </StyledFormWrapper>
    
      );
    };
    
    export default Login;