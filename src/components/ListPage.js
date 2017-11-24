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
        <PilotsList />
        <UpgradesList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(ListPage);
