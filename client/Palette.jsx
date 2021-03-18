import React from 'react';
import OpacitySlider from './OpacitySlider.jsx';
import Mixer from './Mixer.jsx';
import PaletteSwatches from './PaletteSwatches.jsx';
import { connect } from 'react-redux';
import { getPaletteInfo, resetPalette } from './redux/actions.js';

const Palette = (props) => {
  console.log(props);
  const opa = document.getElementById('opaSlider');
  return (
    <div id='palette'>
      <h1>Palette</h1>
      <p className='button' id='reset' onClick={() => props.resetPalette()}>
        Reset
      </p>
      <p
        className='button'
        id='paletteInfo'
        onClick={() => props.getPaletteInfo()}
      >
        Get Palette Info
      </p>
      <p className='instructions'>Click on paint swatch to change opacity.</p>
      <OpacitySlider />
      <PaletteSwatches />
      <Mixer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedColor: state.selectedColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPaletteInfo: () => dispatch(getPaletteInfo()),
    resetPalette: () => dispatch(resetPalette()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
