import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Header from './Header';
import Filter from './Filter';
import Builder from './Builder';
import PilotsList from './PilotsListPage';
import UpgradesList from './UpgradesListPage';
import Sorting from './Sorting';

class ListPage extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Filter />
        <Sorting />
        {/* <div>
          <button className="button" onClick={startLogin}>Login with Google</button>
<<<<<<< HEAD
        </div>
        <Builder />
        <div className="content-container">
||||||| merged common ancestors
        </div>
        <div className="content-container">
=======
        </div> */}
        <div>
>>>>>>> builder
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
