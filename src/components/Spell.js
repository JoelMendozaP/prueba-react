import React from "react";
import Words from './Words';


class Spell extends React.Component {
  createTable = () => {
    let table = []

    for (let i = 0; i < this.props.formValue.length; i++) {
      var char = this.props.formValue.charAt(i);
      if(char == ' '){
        char = '■' 
      }
      table.push(
          <Words word={char}/>
        )
    }
    return table
  }
  
  render() {
    return (
      <div className="spell">
           {this.createTable()}
      </div>
    );
  }
}

export default Spell;
