import React, { Component } from "react";
import "./faq.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/tooltip.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import {
  Button,
  Input,InputGroup, Form
} from "reactstrap";
import Modal from 'react-responsive-modal';

class faq extends Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  state = {
    faqs: [
      {id:1, question: "rfdksjbfh?", answer: "No sir we don't sell weed." },
      {id:2, question: "rfdksjbfh?", answer: "No sir we don't sell weed." },
      {id:3, question: "rfdksjbfh?", answer: "No sir we don't sell weed." },
      {id:4, question: "rfdksjbfh?", answer: "No sir we don't sell weed." },
      {id:5,question: "rfdksjbfh?", answer: "No sir we don't sell weed." }
    ],
    open: false, newquestion:"",newanswer:""
  };

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  handleChange(event) {
   
    if (event.target.name =="question"){
       this.setState({newquestion:event.target.value})
    }else{
      this.setState({newanswer:event.target.value})
    } 
    
  }
  handleSubmit(event) {
    let id=this.state.faqs.length-1;
    var str = {id:id, question: this.state.newquestion, answer: this.state.newanswer };
    this.state.faqs.push(str);
    this.setState({ faqs: this.state.faqs });
    this.setState({open:!this.state.open});
    event.preventDefault();
  }

  handleDelete (event,counterId) {
    event.preventDefault();
    const counters = this.state.faqs.filter(c => c.id !== counterId);
    this.setState({faqs: counters });
}

handleUpdate (event,counterId) {
  event.preventDefault();
  const counters = this.state.faqs.filter(c => c.id !== counterId);
  this.setState({faqs: counters });
}


  render() {
    return (
      <div
        className="container-fluid"
        style={{ marginLeft: "15%", marginRight: "2%", width: "unset" }}
      >
      <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <h2>Add new Question.</h2>
<Form onSubmit={this.handleSubmit}>
  <InputGroup className="mb-3">
  <Input type="text" placeholder="Question" name="question" onChange={this.handleChange} value={this.state.newquestion}/></InputGroup>
  <InputGroup className="mb-3"><Input type="text" placeholder="Answer" name="answer" onChange={this.handleChange} value={this.state.newanswer}/>
  </InputGroup>
  <InputGroup>
  <Input type="submit" value="submit"/>
  </InputGroup>

</Form>
          <div>

          </div>
        </Modal>
        <h1 className="text-center">FAQ's</h1>
        <Button className="btn-primary" onClick={this.onOpenModal}>
          Add new Questions
        </Button>
        <br />

        {this.state.faqs.map(element => (
          <div className="card" key={element.id}>
            <div className="card-header">
              <h3 className=".text-info">
                {element.question}
                <span>
                  <a href="#" data-toggle="tooltip" title="Delete" onClick={ (event) => this.handleDelete(event,element.id)}>
                    <FontAwesomeIcon
                      icon="trash-alt"
                      className="text-danger "
                    />
                  </a>
                </span>
                {/* <span>
                  <a href="#" data-toggle="tooltip" title="Update">
                    <FontAwesomeIcon icon="edit" className="text-primary " />
                  </a>
                </span> */}
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
