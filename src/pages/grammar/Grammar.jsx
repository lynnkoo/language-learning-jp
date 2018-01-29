import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination'
import Operation from '../../components/operation/Operation'
import DataList from '../../components/data-list/DataList'
import InputBlock from '../../components/input-block/InputBlock'
import TextInput from '../../components/text-input/TextInput'
import Selection from '../../components/selection/Selection'
import FoldingBlock from '../../components/folding-block/FoldingBlock'
import './Grammar.scss';

const data = [1,2,3,4,5,6,7,8,9,10,11,12];
export default class Grammar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : ""};
    const tags = ["n2", "n1", "原因"];
  }
  render() {
    var group = "/grammar";
    return (
      <div className="Grammar">
        <Operation />
        <Route path="*/list" render={()=>
          <DataList data={data}/>
        }/>
        <Route path="*/create" render={()=>
          <FoldingBlock title={
            <div>
              <div>info</div>
              <div>info</div>
            </div>
          }>
            <form className="GrammarForm">
              <InputBlock content={(isEdited)=>
                <div className="InputContent">
                  <TextInput label="文法" enable={isEdited}/>
                </div>
              }/>
              <InputBlock content={(isEdited)=>
                <div className="InputContent">
                  <TextInput label="接续" enable={isEdited}/>
                  <span>+</span>
                  <TextInput label="&nbsp;" enable={isEdited}/>
                </div>
              }/>
              <InputBlock content={(isEdited)=>
                <div className="InputContent">
                  <TextInput label="意思" enable={isEdited}/>
                </div>
              }/>
              <InputBlock content={(isEdited)=>
                <div className="InputContent">
                  <TextInput label="解释" enable={isEdited}/>
                </div>
              }/>
              <InputBlock content={(isEdited)=>
                <div className="InputContent">
                  <TextInput label="例句" enable={isEdited}/>
                </div>
              }/>
            </form>
          </FoldingBlock>
        }/>
        <Pagination />
      </div>
    );
  }
}