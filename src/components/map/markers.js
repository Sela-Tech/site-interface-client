import React from "react";
import { Marker } from "./map-view.style";
import {connect} from "react-redux";
import {selectEvidence} from '../../redux/action-creators';

const MarkerClass =  connect()(class extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <Marker {...this.props}
      onClick={()=> this.props.dispatch(selectEvidence(project.id))}>
        <span id="arrow" />
        {project.name}
      </Marker>
    );
  }
});

export default projects => {
  return projects.map((project, index) => {
    const width = project.name.length * 12;

    return (
      <MarkerClass
        key={index}
        project={project}
        lat={project.location.lat}
        lng={project.location.lng}
        markerWidth={width}
        backgroundColor={project.backgroundColor}
      />
    );
  });
};
