import React from "react";

class Spell extends React.Component {
  createList = () => {
    let List = [];

    for (let i = 0; i < this.props.formValue.length; i++) {
      var char = this.props.formValue.charAt(i);
      if (char == " ") {
        char = "■";
      }
      List.push(<div className="word">{char}</div>);
    }
    return List;
  };

  render() {
    return <div className="spell">{this.createList()}</div>;
  }
}

export default Spell;
