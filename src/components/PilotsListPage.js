import React from 'react';
import { connect } from 'react-redux';
import { startPilotsList } from '../actions/pilots';
import SinglePilot from '../components/SinglePilot';
import PilotsFilter from '../components/PilotsFilter';
import { filterPilotResults } from '../visibility/visibility';

class PilotsList extends React.Component {

  componentDidMount() {
    this.props.startPilotsList('https://raw.githubusercontent.com/guidokessels/xwing-data/master/data/pilots.js');
  }

  render() {
    return (
      <div className="content-container listwrapper">
        <h2 className="listwrapper__title">Pilots</h2>
        <PilotsFilter />
          {this.props.pilots.length === 0 ?  <p>No pilots match the slected criteria...</p> : this.props.pilots.map((pilot) => {
            return <SinglePilot key={pilot.id} {...pilot} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pilots: filterPilotResults(state.filters, state.pilots, state.pilotsFilter)
});


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startPilotsList: (url) => {return dispatch(startPilotsList(url))}
});

export default connect(mapStateToProps, mapDispatchToProps)(PilotsList);
