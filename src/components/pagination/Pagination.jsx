import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Pagination.css';

export default class Pagination extends React.Component {
  render() {
    // var number = this.probs.match.number;
    return (
      <div className="Pagination">
        <Route path="*/list/:number" render={()=>
          <div className="Wrapper">
            <Link to="1"><div className="Prefix">↑</div></Link>
            <div className="Number">12/20</div>
            <Link to="2"><div className="Next">↓</div></Link>
          </div>
        }/>
      </div>
    );
  }
}