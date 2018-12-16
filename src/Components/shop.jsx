import React, { Component } from "react";
import "./pane.css";
import shopImg from "../Images/shop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {Card, CardHeader, CardBody,InputGroup, Form, Button, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

library.add(fas);

class Shop extends Component {
  state = {
    StoreName:"Raheem Store",
    Contact:"+92-xxx-xxxxxxx",
    StoreType:"Clothing",
    OpeningTime:"10 am",
    ClosingTime:"10 pm",
    OpensonWeekend:"yes",
    AcceptsCard:"no",
    Wifi:"no",
    Delivery:"yes",
    Address:"SHop no. 65 5th street"
  };

  render() {
    return (
      <div className="container">
        <Card >
          <CardHeader>
            <div className="heading-color">
              <h2 className="text-center">Raheem Store, Allama Iqbal Town</h2>
            </div>
          </CardHeader>
          <CardBody>
            <Button btn-primary>
              Edit Details
            </Button>
<Row>
<Col xs="6">
<div>Store Type</div>
<div>Contact</div>
<div >Opening Time</div>
<div>Closing Time</div>
<div>Opens on Weekend</div>
<div>Accepts Credit Card</div>
<div>Wifi</div>
<div>Delivery</div>
<div>Address</div>

</Col>
<Col xs="6">
<div>{this.state.StoreType}</div>
<div>{this.state.Contact}</div>
<div>{this.state.OpeningTime}</div>
<div>{this.state.ClosingTime}</div>
<div>{this.state.OpensonWeekend}</div>
<div>{this.state.Wifi}</div>
<div>{this.state.Delivery}</div>
<div>{this.state.AcceptsCard}</div>
<div>{this.state.Address}</div>




</Col>
</Row>
          </CardBody>
        </Card>
{/* <Card className="mx-6">
<CardBody className="p-6">
<Button btn btn-primary>
Edit
</Button>
<Form>
<InputGroup>
<input type="text" value="Store Name" readonly/>
</InputGroup>
<InputGroup>
<input type="text" value="Clothing" readonly/>
</InputGroup><InputGroup>
<input type="text" value="Opens 10am" readonly/>
</InputGroup><InputGroup>
<input type="text" value="Closes 10pm" readonly/>
</InputGroup>
<InputGroup>
<input type="text" value="Opens Sunday" readonly/>
</InputGroup>
</Form>
</CardBody>
</Card> */}

        {/* <img src={shopImg} className="img-fluid w-100" alt="image" /> */}

        <div className="text-center margain-top-20">
          <h4>Shop Views</h4>
        </div>
        <div className="line-chart-block block">
          <div className="line-chart">
            <div className="grafico">
              <ul className="eje-y">
                <li data-ejeY="30" />
                <li data-ejeY="20" />
                <li data-ejeY="10" />
                <li data-ejeY="0" />
              </ul>
              <ul className="eje-x">
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
              </ul>
              <div data-valor="25">
                <div data-valor="8">
                  <div data-valor="13">
                    <div data-valor="5">
                      <div data-valor="23">
                        <div data-valor="12">
                          <div data-valor="15" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
