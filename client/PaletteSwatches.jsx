import React from 'react';
import { connect } from 'react-redux';
import { selectColor } from './redux/actions';

const PaletteSwatches = (props) => {
  const opa = document.getElementById('opaSlider');
  return (
    <div id='swatches'>
      {props.swatches.map((swatch, idx) => {
        const isSelected = props.selectedColor.id === swatch.id;
        return (
          <div key={swatch.createdAt}>
            <button
              id='deletecolor'
              onClick={() => props.deleteColor(swatch.id)}
            >
              x
            </button>
            <img
              src={swatch.img}
              className={isSelected ? 'selected' : 'swatch'}
              onClick={() => {
                opa.value = swatch.opacity;
                props.selectColor(swatch);
              }}
            />
          </div>
        );
      })}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaletteSwatches);
export { PaletteSwatches };
