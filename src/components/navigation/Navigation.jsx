import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/word"><div className="Item">单词</div></Link>
          <Link to="/grammar/list"><div className="Item">文法</div></Link>
        </nav>
        暂时并没有什么用的导航
        <div>
        </div>
      </header>
    );
  }
}