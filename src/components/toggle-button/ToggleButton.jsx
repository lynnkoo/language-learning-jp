import React from 'react';
import './ToggleButton.css';

export default class ToggleButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isChecked : this.props.checked
    };

    this.onClicked = this.onClicked.bind(this);
  }

  onClicked(event) {
    event.preventDefault();
    var newState = !this.state.isChecked;
    this.setState({
      isChecked : newState
    });
    this.props.callback(newState);
  }

  render() {
    return (
      <div className={"ToggleButton" + (this.state.isChecked ? ' Checked' : '')}>
        <button onClick={this.onClicked}>编辑</button>
      </div>
    );
  }
}