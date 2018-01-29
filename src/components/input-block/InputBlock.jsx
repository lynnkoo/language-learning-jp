import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ToggleButton from '../toggle-button/ToggleButton';
import './InputBlock.scss';

export default class InputBlock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isEdit : true,
      title : this.props.title
    };

    this.onEditClicked = this.onEditClicked.bind(this);
    this.onClicked = this.onClicked.bind(this);
  }

  onEditClicked(isChecked) {
    this.setState({
      isEdit : isChecked
    });
  }
  onClicked(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={`InputBlock ${this.state.isEdit?"Editor":""}`}>
        <div className="Title">{this.state.title}</div>
        <div className="Content">
          {this.props.content(this.state.isEdit)}
          <Route path="*/create" render={()=>
            <ToggleButton callback={this.onEditClicked} checked={this.state.isEdit}/>
          }/>
        </div>
        {this.state.isEdit?
          <div className="Confirm">
            <button onClick={this.onClicked}>确认</button>
            <button onClick={this.onClicked}>取消</button>
          </div>
          :""}
      </div>
    );
  }
}