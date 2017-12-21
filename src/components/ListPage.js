import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Header from './Header';
import Filter from './Filter';
import PilotsList from './PilotsListPage';
import UpgradesList from './UpgradesListPage';
import Sorting from './Sorting';
import { setcardTypePilotFilters, setcardTypeUpgradeFilters } from '../actions/filters';

class ListPage extends React.Component {

  showPilots = () => {
    this.props.setPilotsSelected(!this.props.filters.cardTypePilot);
  }

  showUpgrades = () => {
    this.props.setUpgradesSelected(!this.props.filters.cardTypeUpgrade);
  }

  render(){
    return (
      <div>
        <Header />
        <Filter />
        <Sorting />
        {/* <div>
          <button className="button" onClick={startLogin}>Login with Google</button>
        </div> */}
        <div className="lists__wrapper">
          {this.props.filters.cardTypePilot ? <PilotsList /> : <button className="lists__button button" onClick={this.showPilots}>Show Pilots</button>}
          <hr/>
          {this.props.filters.cardTypeUpgrade ? <UpgradesList /> : <button className="lists__button button" onClick={this.showUpgrades}>Show Upgrades</button>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  setPilotsSelected: (cardTypePilot) => dispatch(setcardTypePilotFilters(cardTypePilot)),
  setUpgradesSelected: (cardTypeUpgrade) => dispatch(setcardTypeUpgradeFilters(cardTypeUpgrade))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
