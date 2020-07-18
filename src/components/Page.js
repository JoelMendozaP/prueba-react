import React from "react";
import "./css/style.css";
import InputData from "./InputData";
import Spell from "./Spell";

class Page extends React.Component {
  state = { data: "" };

  handleChange = (e) => {
    console.log({ value: e.target.value });
    this.setState({ data: e.target.value });
    if (e.target.value.length > 0){
        var intro = document.getElementById('title');
        intro.style.color = '#FC5F3A';
    }else{
        var intro = document.getElementById('title');
        intro.style.color = 'white';
    }
  };
  render() {
    return (
        <div className="container">
      <div className="page">
        <h1 className="page__title" id="title">PRUEBA</h1>
        <InputData onChange={this.handleChange} formValue={this.state.data} />
        <Spell formValue={this.state.data} />
      </div>
      </div>
    );
  }
}
export default Page;
