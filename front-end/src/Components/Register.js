import React from "react";
import useForm from "./useForm";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

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
    <Form >
      <Row>
        <Col md="4" sm="4" xs="4"></Col>
        <Col md="4" sm="4" xs="4">
          <FormGroup>
            <Label>Username</Label>
            <Input
              name="username"
              type="text"
              placeholder="username"
              value={values.username}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
            />
            
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Col>
        <Col md="4" sm="4" xs="4"></Col>
      </Row>
    </Form>
  );
  };
// }

export default Register;