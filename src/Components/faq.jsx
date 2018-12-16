import React, { Component } from "react";
import "./faq.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/tooltip.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

class faq extends Component {
  state = {
    faqs: [
      { question: "rfdksjbfh?", answer: "No sir we don't sell weed." },
      { question: "rfdksjbfh?", answer: "No sir we don't sell weed." },
      { question: "rfdksjbfh?", answer: "No sir we don't sell weed." },
      { question: "rfdksjbfh?", answer: "No sir we don't sell weed." },
      { question: "rfdksjbfh?", answer: "No sir we don't sell weed." }
    ]
  };

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginLeft: "15%", marginRight: "2%", width: "unset" }}
      >
        <h1 className="text-center">FAQ's</h1>
        <br />

        {this.state.faqs.map(element => (
          <div className="card">
            <div className="card-header">
              <h3 className=".text-info">
                {element.question}
                <span>
                  <a href="#" data-toggle="tooltip" title="Delete">
                    <FontAwesomeIcon
                      icon="trash-alt"
                      className="text-danger "
                    />
                  </a>
                </span>
                <span>
                  <a href="#" data-toggle="tooltip" title="Update">
                    <FontAwesomeIcon icon="edit" className="text-primary " />
                  </a>
                </span>
              </h3>
            </div>
            <div className="card-body">{element.answer}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default faq;
