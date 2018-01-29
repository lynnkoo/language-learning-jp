import React from 'react';
import './TextInput.scss';

export default class TextInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      enable : this.props.enable,
      label : this.props.label
    };
  }


  render() {
    return (
      <div className="TextInput">
        <label>{this.state.label}</label>
        <input type="text" disabled={this.state.enable?"":"disabled"}/>
      </div>
    );
  }
}