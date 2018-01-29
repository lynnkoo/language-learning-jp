import React from 'react';
import './DataList.css';

export default class DataList extends React.Component {
  render() {
    var data = this.props.data;
    return (
      <ul className="DataList">
        {data.map((data) =>
          <li className="Row">
            <div>{data}</div>
            <div>{data}</div>
            <div>{data}</div>
            <div>{data}</div>
          </li>
        )}
      </ul>
    );
  }
}