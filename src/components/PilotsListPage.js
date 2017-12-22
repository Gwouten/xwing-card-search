import React from 'react';
import { connect } from 'react-redux';
import SinglePilot from '../components/SinglePilot';
import PilotsFilter from '../components/PilotsFilter';
import { filterPilotResults } from '../visibility/visibility';
import { setcardTypePilotFilters } from '../actions/filters';

class PilotsList extends React.Component {

  onHide = () => {
    this.props.setPilotsSelected(!this.props.filters.cardTypePilot);
  }

  render() {
    return (
      <div className="content-container listwrapper">
        <h2 className="listwrapper__title">Pilots</h2>
        <button className="list__button--hide button" onClick={this.onHide}>Hide</button>
        <PilotsFilter />
          {this.props.pilots.length === 0 ?  <p className="list__empty-message">No pilots match the selected criteria...</p> : this.props.pilots.map((pilot) => {
            return <SinglePilot key={pilot.id} {...pilot} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
  pilots: filterPilotResults(state.filters, state.pilots, state.pilotsFilter)
});


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  setPilotsSelected: (cardTypePilot) => dispatch(setcardTypePilotFilters(cardTypePilot)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PilotsList);
