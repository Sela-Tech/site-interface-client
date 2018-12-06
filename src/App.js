import React, { Component } from 'react';
import s from 'styled-components';
import Map from "./components/map";
import Info from "./components/info";
import { fetchEvidence } from './redux/action-creators';
import {connect} from 'react-redux';
import Modal from './components/modal';

const W = s.div`
height: 100%;

#side{
  border-right:1px solid #eee;
  background: white;
  height: 100%;
}

#map{
  background: #fdfdfd;
  height: 100%;
${
  props => props.showModal &&
  ` 
    position: relative;
    z-index: -1;
  `
  }
`;

class App extends Component {
  constructor(props){
    super(props);
    this.props.dispatch(fetchEvidence())
  }
  render() {
    return (
      <W className="xs-12">
        <Modal/>
        <div className="xs-12 sm-4" id="side">
          <Info/>
        </div>
       
        <div className="xs-12 sm-8" id='map'>
          <Map show={this.props.showModal}/>
        </div>

      </W>
    );
  }
}

const mapStateToProps = state=>{
  return {
  showModal: state.showModal
  }
}

export default  connect(mapStateToProps)(App);
