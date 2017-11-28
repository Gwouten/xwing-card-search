import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Header from './Header';
import Filter from './Filter';
import PilotsList from './PilotsListPage';
import UpgradesList from './UpgradesListPage';

class ListPage extends React.Component {
  render(){
    return (
      <div className="box-layout">
        <Header />
        <Filter />
        <div className="box-layout__box">
          <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
        <div className="content-container">
          {this.props.filters.cardTypePilot && <PilotsList />}
          {this.props.filters.cardTypeUpgrade && <UpgradesList />}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
