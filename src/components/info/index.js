import React from 'react';
import s from 'styled-components';
import {connect} from "react-redux";
import { selectEvidence } from '../../redux/action-creators';

const W = s.div`

#main{
    height: 250px;
    width: 100%;
    background: gray;
    display: block;
    margin-bottom: 5vh;
    object-fit:cover;
    
}
    height: 100vh;
    overflow: auto;
    padding: 3%;
    .gallery{
        height: 500px;
        overflow: auto;
        button{
            border: 1px solid white;
            background: transparent;
            height: 100px;
            padding: 0;
             outline: none;
             cursor: pointer;
            img{
                background: gray;
                width: 100%;
                height: 100%;
                object-fit: cover;
                
            }
        }
    }


    label{
        color: #888;
        font-size:14px;
        display: block;
        margin-bottom: 1em;
    }
`
;
class Info extends React.Component{

    render(){
        return <W className="xs-12">

            <div className="xs-12">
                <div className='xs-12'>
                    <img src={this.props.selected.main_image_src} alt="" id="main"/>    
                </div>
            
                <label>Author</label>
                <h3>{this.props.selected.author || "--------------------"}</h3>
               
                <label>Site Name</label>
                <h3>{this.props.selected.name || "--------------------"}</h3>
                
            </div>
            

            <div className="xs-12 gallery">
            <h3>Other Images</h3>
            <div className='xs-12'>
            { this.props.selected && this.props.selected.images && this.props.selected.images.length ?
            <React.Fragment>
                 <label>Click on an image to expand</label>
                 {this.props.selected.images.map((image,i)=>{
                return <button className="xs-12 sm-4" key={i} onClick={()=>this.props.dispatch(selectEvidence(i,"image"))}>
                    <img src={image} alt=""/>
                </button>    
            })}
            </React.Fragment>  
            :
            <p>No Images Found.</p>
            
        }
        </div>
                
            </div>
        </W>
    }
}

const mapStateToProps  = state=>{
    return {
        selected: state.selected_from_map
    }
}

export default connect(mapStateToProps)(Info);

