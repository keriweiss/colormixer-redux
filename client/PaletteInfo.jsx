import React from 'react';
import { connect } from 'react-redux';

const PaletteInfo = (props) => {
  console.log('test PaletteInfo', props.paletteInfo);
  return (
    <div id='paletteinfo'>
      <h2>Palette Info</h2>
      {props.paletteInfo.map((info) => {
        return (
          <div>
            <h3>{info.color.name}</h3>
            <p>% Total: {info.opacity}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { paletteInfo: state.paletteInfo };
};

export default connect(mapStateToProps)(PaletteInfo);
