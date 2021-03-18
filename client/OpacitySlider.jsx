import React from 'react';
import { connect } from 'react-redux';
import { changeOpacity } from './redux/actions';

const OpacitySlider = (props) => {
  return (
    <input
      type='range'
      min='1'
      max='100'
      className='slider'
      id='opaSlider'
      onChange={(ev) => props.changeOpacity(ev.target.value)}
    ></input>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeOpacity: (value) => dispatch(changeOpacity(value)),
  };
};

export default connect(null, mapDispatchToProps)(OpacitySlider);
