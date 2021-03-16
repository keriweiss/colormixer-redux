import React from 'react';
import { connect } from 'react-redux';
import { changeOpacity } from './redux/actions';

const OpacitySlider = ({ changeOpacity }) => {
  const opa = document.getElementById('opaSlider');
  return (
    <input
      type='range'
      min='1'
      max='100'
      className='slider'
      id='opaSlider'
      onChange={() => changeOpacity(opa.value)}
    ></input>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedColor: state.selectedColor,
    swatches: ownProps.swatches,
    deleteColor: ownProps.deleteColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectColor: (color) => dispatch(selectColor(color)),
  };
};

export default OpacitySlider;
