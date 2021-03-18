import React from 'react';
import { getPaintInfo, addColor } from './redux/actions';
import { connect } from 'react-redux';

const ColorChart = (props) => {
  return (
    <div id='colors_container'>
      {props.colors.map((color) => {
        return (
          <div className='color' key={color.id}>
            <p
              className='button'
              id='addToPalette'
              onClick={() => {
                props.getPaintInfo(color);
              }}
            >
              info
            </p>
            <img
              id='colorimage'
              src={color.swatch}
              onClick={() => {
                props.addColor(color.id, color.swatch);
              }}
            />
            <p>{color.name}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    addColor: state.addColor,
    paintInfo: state.paintInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPaintInfo: (color) => dispatch(getPaintInfo(color)),
    addColor: (swatch, colorImg) => dispatch(addColor(swatch, colorImg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorChart);
