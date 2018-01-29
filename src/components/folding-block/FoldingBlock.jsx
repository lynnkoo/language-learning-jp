import React from 'react';
import './FoldingBlock.scss';

export default class FoldingBlock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFolded : false,
    };
  }

  render() {
    return (
      <div className="FoldingBlock">
        {this.state.isFolded?
          <div className="Folded" onClick={()=>
            this.setState({
              isFolded:false
            })
          }>
            {this.props.title}
            <div className="Button2" >v</div>
          </div>
        :
          <div className="Spreaded">
            <div className="Button" onClick={()=>
              this.setState({
                isFolded:true
              })
            }>^</div>
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}