import React from 'react';
import { connect } from 'react-redux';
import { startUpgradesList } from '../actions/upgrades';
import UpgradesFilter from '../components/UpgradesFilter';
import SingleUpgrade from '../components/SingleUpgrade';
import { filterUpgradeResults } from '../visibility/visibility';

class UpgradesList extends React.Component {

  componentDidMount() {
    this.props.startUpgradesList('https://raw.githubusercontent.com/guidokessels/xwing-data/master/data/upgrades.js');
  }

  render() {
    return (
      <div className="cardlist">
        <UpgradesFilter />
        <h2>Upgrades</h2>
        {this.props.upgrades.map((upgrade) => {
          return <SingleUpgrade key={upgrade.id} {...upgrade} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { upgrades: filterUpgradeResults(state.filters, state.upgrades, state.upgradesFilter) }
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startUpgradesList: (url) => {return dispatch(startUpgradesList(url))}
});

export default connect(mapStateToProps, mapDispatchToProps)(UpgradesList);
