import React from "react";

class InputData extends React.Component {
  render() {
    return (
      <div className="page__input">
        <input
          onChange={this.props.onChange}
          type="text"
          id="data"
          placeholder="Ingresa un texto"
          value={this.props.formValue}
        />
      </div>
    );
  }
}

export default InputData;
