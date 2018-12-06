import React from "react";
import s from "styled-components";
import {connect} from 'react-redux';
import { closeModal } from "../../redux/action-creators";

const W = s.div`
position: fixed;
z-index: 10000000000000000000;
background: rgba(0,0,0,.8);
top: 0;
left: 0;
right:0;
bottom:0;
height: 100vh;
width: 100vw;

img{
    height: 80%;
    width: 90%;
    object-fit: cover;
    margin: auto;
}

#close{
    background: white;
    color: #555;
    font-size: 15px;
    border-radius: 4px;
    border: 0;
    position: fixed;
    top: 1em;
    right: 1em;
    padding: .5em 1em;
    outline: none;
    cursor: pointer;
}
`;

 class Modal extends React.Component{
    render(){
        switch (this.props.showModal) {
            case true:
                return <W className="xs-12">
                <div className="xs-12">
                    <button id="close" onClick={ ()=>this.props.dispatch(closeModal()) }>Close</button>
                </div>
                <div className="c-w">
                <div className="c t-c">
                    <img src={this.props.selectedImage} alt=""/>
                </div>
                
                </div>

                </W>;
            default:
                return  null;
        }
    }
}

const mapStateToProps = state=>{
    return {
        showModal: state.showModal,
        selectedImage: state.selected_image
    }
}
export default connect(mapStateToProps)(Modal);