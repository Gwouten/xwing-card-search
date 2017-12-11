import React from 'react';
import { connect } from 'react-redux';
import { builderRemovePilot } from '../actions/builder';

class Builder extends React.Component {

  render(){
    // {console.log(this.props.builder.pilots)}
    return (
    <div>
      <h1>{this.props.builder.name}</h1>

      {this.props.builder.pilots.map((pilot, i) => {
        return (
          <div key={pilot.id+i}>
            <h3>{pilot.name}</h3>
            <h4>{pilot.ship}</h4>
            <p>{pilot.text}</p>
          </div>
        );
      })}

    </div>
  )}
}

const mapStateToProps = (state) => ({
  builder: state.builder
});

const mapDispatchToProps = (dispatch) => ({
  builderRemovePilot: (i) => dispatch(builderRemovePilot(i))
});

export default connect(mapStateToProps)(Builder);
