import React from 'react';
import './Selection.scss';

export default class Selection extends React.Component {

  constructor(props) {
    super(props);
    var data = [];
    for (var i = 0; i < 10; i++) {
      data[data.length] = {id : (data.length + 1), tag : "N" + (data.length + 1)};
    }
    var selected = [1,3,4,5];
    this.state = {
      data: data,
      selected: selected
    };
  }

  onItemClick(item) {
    const selected = this.state.selected.filter(id=> item.id != id);
    if (selected.length == this.state.selected.length) {
      selected.push(item.id);
    }
    console.log(selected);
    this.setState({
      selected : selected
    });
  }

  render() {
    const data = this.state.data;
    const selected = this.state.selected;
    return (
      <div className="Selection">
        <ul className="Selected">
          {data.filter(item=>
            selected.includes(item.id))
          .map(item=>
            <li key={item.id} className="Item"
              onClick={this.onItemClick.bind(this, item)}>{item.tag}</li>
          )}
        </ul>
        <ul className="List">
          {data.map(item=>
            <li key={item.id} className={`Item ${selected.includes(item.id) ? "Selected" : ""}`}
              onClick={this.onItemClick.bind(this, item)}>{item.tag}</li>
          )}
          <div className="Create">+</div>
        </ul>
      </div>
    );
  }
}