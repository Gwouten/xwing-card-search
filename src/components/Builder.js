import React from 'react';
import { connect } from 'react-redux';
import BuilderForm from './BuilderForm';
import BuilderPilot from './BuilderPilot';
import { builderReset, builderResetPilots } from '../actions/builder';

class Builder extends React.Component {

  builderResetSquad =() => {
    this.props.builderReset();
  }

  builderResetPilots =() => {
    this.props.builderResetPilots();
  }

  render(){
    return (
    <div>

      <BuilderForm />

      <button onClick={this.builderResetSquad}>Reset squad</button>
      <h1>{this.props.builder.name ? this.props.builder.name : 'Unnamed squad'} - {this.props.builder.faction} - {this.props.builder.pointsUsed.length > 0 ? this.props.builder.pointsUsed.reduce((a, b) => a+b) : 0}/{this.props.builder.points}</h1>
      <button onClick={this.builderResetPilots}>Remove all pilots</button>
      <div className="squadlist">
      {this.props.builder.pilots.map((pilot, i) => {
        return (
          <BuilderPilot key={pilot.id + i} data-index={i} {...pilot}/>
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
  builderReset: () => dispatch(builderReset()),
  builderResetPilots: () => dispatch(builderResetPilots())
});

export default connect(mapStateToProps, mapDispatchToProps)(Builder);
