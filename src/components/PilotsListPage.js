import React from 'react';
import { connect } from 'react-redux';
import { startPilotsList } from '../actions/pilots';
import SinglePilot from '../components/SinglePilot';
import filterResults from '../visibility/visibility';

class PilotsList extends React.Component {

  componentDidMount() {
    this.props.startPilotsList('https://raw.githubusercontent.com/guidokessels/xwing-data/master/data/pilots.js');
  }

  render() {
    return (
      <div>
        <h2>Pilots</h2>
        {this.props.pilots.map((pilot) => {
          return <SinglePilot key={pilot.id} {...pilot} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { pilots: filterResults(state.filters, state.pilots) }
);


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startPilotsList: (url) => {return dispatch(startPilotsList(url))}
});

export default connect(mapStateToProps, mapDispatchToProps)(PilotsList);
