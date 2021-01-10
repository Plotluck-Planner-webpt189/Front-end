import React from "react";
import useForm from "./useForm";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
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

let Register = props => {
    
    const { handleChange, handleSubmit, values, errors } = useForm(
      // submit,
      // validate
    );
  
    // function submit() {
    //   axios
    //     .post(
    //       "",
    //       {
    //         username: values.username,
    //         email: values.email,
    //         password: values.password
    //       }
    //     )
  
    //     .then(response => {
    //       console.log("Registration Post response", response);
    //       props.history.push("/");
    //     })
    //     .catch(error => {
    //       console.log("Registration post error", error);
    //     });

  return (
    <StyledFormWrapper>
      <StyledForm>
      <h1>Create an Account</h1>
    <Form>
      <Row>
        <Col md="4" sm="4" xs="4"></Col>
        <Col md="4" sm="4" xs="4">
          <FormGroup>
            <Label>Username</Label>
            <StyledInput
              name="username"
              type="text"
              placeholder="username"
              value={values.username}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <StyledInput
              name="email"
              type="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <StyledInput
              name="password"
              type="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
            />
            
          </FormGroup>
          <StyledButton type="submit">Submit</StyledButton>
        </Col>
        <Col md="4" sm="4" xs="4"></Col>
      </Row>
    </Form>
    </StyledForm>
    </StyledFormWrapper>
  );
  };
// }

export default Register;