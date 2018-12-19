import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Nav,
  NavItem
} from "reactstrap";
import back from "../Images/background2.jpg";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }
  state = {
    email: "",
    phone: "",
    password: "",
    newpassword: "",
    opensWeekend: false,
    wheelChair: false,
    delivery: false,
    restRoom:false,
    wifi: false,

    emailerr: "",
    phoneerr: "",
    passworderr: "",
    newpassworderr: ""
  };

  handleChange(e) {
    if (e.target.name == "email") {
      let mail = e.target.value;

      this.setState({
        email: mail
      });
    }
    if (e.target.name == "password") {
      let pass = e.target.value;

      console.log(pass);
      this.setState({ password: pass });
    }

    if (e.target.name == "newpassword") {
      let newpass = e.target.value;
      this.setState({ newpassword: newpass });
    }

    if (e.target.name == "number") {
      let no = e.target.value;
      this.setState({ phone: no });
    }
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      alert("Form submitted");
    }
  }

  validateForm() {
    //   let fields = this.state.fields;
    //   let errors = {};
    let mail = this.state.email;
    let no = this.state.phone;
    let pass = this.state.password;
    let npass = this.state.newpassword;

    let eerror = "";
    let perror = "";
    let paserror = "";
    let npasserror = "";
    let formIsValid = true;

    if (!mail) {
      formIsValid = false;
      eerror = "*Please enter your email.";
      this.setState({ emailerr: eerror });
    }

    //regular expression for email validation
    var pattern = new RegExp(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i
    );
    if (!pattern.test(mail)) {
      formIsValid = false;
      eerror = "*Please enter valid email-ID.";
      this.setState({ emailerr: eerror });
    }

    if (!no) {
      formIsValid = false;
      perror = "*Please enter your number.";
      this.setState({ phoneerr: perror });
    }

    if (!no.match(/^[0-9]{11}$/)) {
      formIsValid = false;
      paserror = "*Please enter valid number";
      this.setState({ phoneerr: perror });
    }

    if (!pass) {
      formIsValid = false;
      paserror = "*Please enter your password.";
      this.setState({ passworderr: paserror });
    }
    if (
      !pass.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)
    ) {
      formIsValid = false;
      paserror = "*Please enter secure and strong password.";
      this.setState({ passworderr: paserror });
    }
    if (npass != pass) {
      formIsValid = false;
      npasserror = "*passwords don't match";
      this.setState({ newpassworderr: npasserror });
    }

    return formIsValid;
  }

  handleCheck(e) {
    let val = e.target.value;
    let check=true;
    if (e.target.name=="opensWeekend") {
      this.state.opensWeekend=true;
        this.setState({ opensWeekend: this.state.opensWeekend });
    }
    if (e.target.name == "wheelChair") {
      this.state.wheelChair=true
        this.setState({ wheelChair: this.state.wheelChair });
      
    }
    if (e.target.name == "delivery") {
      this.state.delivery=true;

        this.setState({ delivery: this.state.delivery });
      
    }
    if (e.target.name == "restRoom") {
      this.state.restRoom=true;

        this.setState({ restRoom: this.state.restRoom });
      
    }
    if (e.target.name == "wifi") {
      this.state.wifi=true;
        this.setState({ wifi: this.state.wifi });
      
    }
    console.log(this.state);
  }

  render() {
    return (
      <div
        className="app flex-row align-items-center"
        style={{ height: "100%", backgroundImage: "url(" + back + ")" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6" style={{ marginTop: "3%" }}>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.submituserRegistrationForm}>
                    <h1>Register</h1>
                    <p className="text-muted">
                      Create public profile for your shop
                    </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Store Name"
                        autoComplete="username"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </InputGroup>
                    {this.state.emailerr}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                      />
                    </InputGroup>
                    {this.state.passworderr}
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        name="newpassword"
                        onChange={this.handleChange}
                        value={this.state.newpassword}
                      />
                    </InputGroup>
                    {this.state.newpassworderr}

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="phone" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="tel"
                        placeholder="Enter Store Number"
                        name="number"
                        onChange={this.handleChange}
                        value={this.state.phone}
                      />
                      {this.state.phoneerr}
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="map" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="address"
                        placeholder="Enter Store address"
                        required
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="clock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="time"
                        placeholder="Enter Store opening Time"
                        name="openingTime"
                        required
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="clock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="time"
                        placeholder="Enter Store closing Time"
                        name="closingTime"
                        required
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="list" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Enter Category e.g clothing"
                        name="clothing"
                        required
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input
                          type="checkbox"
                          name="opensWeekend"
                          onChange={this.handleCheck}

                        />
                        Opens Sunday
                      </span>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input
                          type="checkbox"
                          name="wifi"
                          onChange={this.handleCheck}

                        />
                        Wifi
                      </span>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input
                          type="checkbox"
                          name="wheelChair"
                          onChange={this.handleCheck}
                       
                        />
                        Wheel Chair Accessible
                      </span>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input
                          type="checkbox"
                          name="restRoom"
                          onChange={this.handleCheck}

                        />
                        RestRoom
                      </span>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input
                          type="checkbox"
                          name="delivery"
                          onChange={this.handleCheck}

                        />
                        Delivery
                      </span>
                    </InputGroup>
                    <Button
                      type="submit"
                      value="Create Account"
                      color="success"
                      block
                    >
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block>
                        <span>facebook</span>
                      </Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block>
                        <span>twitter</span>
                      </Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
