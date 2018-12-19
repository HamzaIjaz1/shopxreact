import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import back from "../Images/background2.jpg";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }
  state = {
    redirect: false,
    isActive: true,
    email: "",
    password:"",
        errors: "",
  };

  // redirectTo = () => {
  //   this.setState({ redirect: true });
  //   this.setState({ isActive: false });
  // };

  // letsgo = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to="/pane" />;
  //   }
  // };


  handleChange(e) {
    let mail = e.target.value;
    this.setState({ email: mail });
  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      console.log("form is validate");
    }
  }

  validateForm() {
    let formisValid=true;
    let errs=" ";
      let mail = this.state.email;
      if (!mail) {
        errs = "Field cannot be empty";
      }
      var pattern = new RegExp(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i
      );
      if (!pattern.test(mail)) {
        formisValid=false;
        errs="please enter valid email address";
      }
     
      this.setState({errors:errs});
    return formisValid;
  }
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + back + ")",
          height: "100%",
          margin: 0
        }}
      >
        <div className="app flex-row align-items-center">
          <Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form onSubmit={this.submitLoginForm}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <FontAwesomeIcon icon="user" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Enter Email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            reuired
                          />
                          <div color="red">
                          {this.state.errors}
                          </div>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <FontAwesomeIcon icon="lock" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                          />
                        </InputGroup>
                        {this.state.prrors}
                        <Row>
                          <Col xs="6">
                            {/* {this.letsgo()} */}
                            <Button color="primary" type="submit">
{/* <Input
                            type="submit"
                              
                              className="px-4"
                              // onClick={this.redirectTo}
                            /> */}
                              Login
                            </Button>
                            
                            
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">
                              Forgot password?
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                  <Card
                    className="text-white bg-primary py-5 d-md-down-none"
                    style={{ width: "44%" }}
                  >
                    <CardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>Register your shop now attract more customers.</p>
                        <Link to="/register">
                          <Button
                            color="primary"
                            className="mt-3"
                            active
                            tabIndex={-1}
                          >
                            Register Now!
                          </Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Login;
