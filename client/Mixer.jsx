import React from 'react';
import { connect } from 'react-redux';

const Mixer = (props) => {
  return (
    <div id='mixer'>
      {props.swatches.map((swatch, idx) => {
        return (
          <img
            key={idx}
            src={swatch.img}
            style={{ opacity: `${swatch.opacity}%` }}
            className={idx === 0 ? 'firstswatch' : 'paletteswatch'}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    swatches: state.swatches,
  };
};

export default connect(mapStateToProps)(Mixer);
