import React from 'react';
import { connect } from 'react-redux';
import { startPilotsList } from '../actions/pilots';
import SinglePilot from '../components/SinglePilot';
import PilotsFilter from '../components/PilotsFilter';
import filterResults from '../visibility/visibility';

class PilotsList extends React.Component {

  componentDidMount() {
    this.props.startPilotsList('https://raw.githubusercontent.com/guidokessels/xwing-data/master/data/pilots.js');
  }

  render() {
    return (
      <div className="cardlist">
        <PilotsFilter />
        <h2>Pilots</h2>
          {this.props.pilots.map((pilot) => {
            return <SinglePilot key={pilot.id} {...pilot} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
  { pilots: filterResults(state.filters, state.pilots, state.pilotsFilter) }
)};


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startPilotsList: (url) => {return dispatch(startPilotsList(url))}
});

export default connect(mapStateToProps, mapDispatchToProps)(PilotsList);
