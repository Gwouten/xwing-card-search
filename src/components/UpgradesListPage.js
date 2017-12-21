import React from 'react';
import { connect } from 'react-redux';
import { startUpgradesList } from '../actions/upgrades';
import UpgradesFilter from '../components/UpgradesFilter';
import SingleUpgrade from '../components/SingleUpgrade';
import { filterUpgradeResults } from '../visibility/visibility';
import { setcardTypeUpgradeFilters } from '../actions/filters';

class UpgradesList extends React.Component {

  componentDidMount() {
    this.props.startUpgradesList('https://raw.githubusercontent.com/guidokessels/xwing-data/master/data/upgrades.js');
  }

  onHide = () => {
    this.props.setUpgradesSelected(!this.props.filters.cardTypeUpgrade);
  }

  render() {
    return (
      <div  className="content-container listwrapper">
        <h2 className="listwrapper__title">Upgrades</h2>
        <button className="list__button--hide button" onClick={this.onHide}>Hide</button>
        <UpgradesFilter />
        {this.props.upgrades.map((upgrade) => {
          return <SingleUpgrade key={upgrade.id} {...upgrade} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    upgrades: filterUpgradeResults(state.filters, state.upgrades, state.upgradesFilter),
    filters: state.filters
  }
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startUpgradesList: (url) => {return dispatch(startUpgradesList(url))},
  setUpgradesSelected: (cardTypeUpgrade) => dispatch(setcardTypeUpgradeFilters(cardTypeUpgrade)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpgradesList);
