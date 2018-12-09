import React, { Component } from "react";
import "./faq.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/tooltip.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

class faq extends Component {
  state = {};

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
        <div className="card">
          <div className="card-header">
            <h3 className=".text-info">
              Intranet Qs?
              <span>
                <a href="#" data-toggle="tooltip" title="Delete">
                  <FontAwesomeIcon icon="trash-alt" className="text-danger " />
                </a>
              </span>
              <span>
                <a href="#" data-toggle="tooltip" title="Update">
                  <FontAwesomeIcon icon="edit" className="text-primary " />
                </a>
              </span>
            </h3>
          </div>

          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptates nostrum molestiae officiis adipisci, quae, iusto iste
              dolor rerum cum ex assumenda dolores temporibus odit ratione
              voluptatem, delectus consequatur! Ex?
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className=".text-info">
              How often do you open?
              <span>
                <a href="#" data-toggle="tooltip" title="Delete">
                  <FontAwesomeIcon icon="trash-alt" className="text-danger " />
                </a>
              </span>
              <span>
                <a href="#" data-toggle="tooltip" title="Update">
                  <FontAwesomeIcon icon="edit" className="text-primary " />
                </a>
              </span>
            </h3>
          </div>

          <div className="card-body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              illo consequuntur minima dolorum ipsum suscipit similique vel,
              sunt, iusto est autem quasi laudantium eveniet possimus eum non,
              excepturi debitis nihil Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laboriosam alias sit natus nobis, tenetur, illum
              repudiandae eveniet, minima error harum temporibus accusamus
              facere! Accusamus blanditiis voluptas sunt facilis cupiditate
              temporibus! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quaerat doloremque sequi, eum nisi consequuntur vitae
              repellendus provident iure repellat. Similique vero voluptas
              repellendus sit magni possimus quidem exercitationem dolor hic?
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className=".text-info">
              Is there a sale?
              <span>
                <a href="#" data-toggle="tooltip" title="Delete">
                  <FontAwesomeIcon icon="trash-alt" className="text-danger " />
                </a>
              </span>
              <span>
                <a href="#" data-toggle="tooltip" title="Update">
                  <FontAwesomeIcon icon="edit" className="text-primary " />
                </a>
              </span>
            </h3>
          </div>

          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio totam laboriosam aperiam ex repellat rem nisi ratione
              perferendis, officiis excepturi. Alias officia voluptatem et
              distinctio enim, aut sint. Itaque, autem?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default faq;
