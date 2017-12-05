import React from 'react';
import { connect } from 'react-redux';

class Builder extends React.Component {
  render(){
    return (
    <div>
      {console.log(this.props.builder)}
      <h1>{this.props.builder.name}</h1>
    </div>
  )}
}

const mapStateToProps = (state) => ({
  builder: state.builder
});

export default connect(mapStateToProps)(Builder);
