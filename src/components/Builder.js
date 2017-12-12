import React from 'react';
import { connect } from 'react-redux';
import { builderRemovePilot } from '../actions/builder';

class Builder extends React.Component {

  builderRemovePilot = (e) => {
    const pilotIndex = e.target.parentElement.getAttribute('data-index');
    console.log(pilotIndex);
    this.props.builderRemovePilot(pilotIndex);
  }

  render(){
    // {console.log(this.props.builder.pilots)}
    return (
    <div>
      <h1>{this.props.builder.name}</h1>
      <div className="squadlist">
      {this.props.builder.pilots.map((pilot, i) => {
        return (
          <div key={pilot.id+i} data-index={i}>
            <h3>{pilot.name}</h3>
            <h4>{pilot.ship}</h4>
            <p>{pilot.text}</p>
            <button onClick={this.builderRemovePilot}>Remove</button>
          </div>
        );
      })}
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => ({
  builder: state.builder
});

const mapDispatchToProps = (dispatch) => ({
  builderRemovePilot: (pilotIndex) => dispatch(builderRemovePilot(pilotIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Builder);
