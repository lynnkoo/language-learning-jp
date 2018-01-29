import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Operation.css';

export default class Operation extends React.Component {
  render() {
    // var number = this.probs.match.number;
    return (
      <div className="Operation">
        <Link to="list"><div className="Operation1">列表</div></Link>
        <Link to="create"><div className="Operation1">新建</div></Link>
        <div className="Operation1">删除</div>
      </div>
    );
  }
}