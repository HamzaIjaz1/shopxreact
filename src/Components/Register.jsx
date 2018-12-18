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
                  <Form>
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
                        placeholder="Username"
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
                      />
                    </InputGroup>
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
                      />
                    </InputGroup>
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
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="phone" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="tel" placeholder="Enter Store Number" />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="map" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="address" placeholder="Enter Store address" />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="clock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="phone"
                        placeholder="Enter Store opening Time"
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="clock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="phone"
                        placeholder="Enter Store closing Time"
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
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input type="checkbox" />
                        Opens Sunday
                      </span>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input type="checkbox" />
                        Wifi
                      </span>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input type="checkbox" />
                        Wheel Chair Accessible
                      </span>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <span className="align-center">
                        <Input type="checkbox" />
                        RestRoom
                      </span>
                    </InputGroup>
                    <Button color="success" block>
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
