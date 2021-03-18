import React from 'react';
import { connect } from 'react-redux';
import { colorGroupSelect } from './redux/actions.js';

const ColorGroupSelect = (props) => {
  return (
    <div>
      Color Groups:
      <select
        id='selectGroup'
        onChange={(ev) => {
          props.colorGroupSelect(ev.target.value);
        }}
      >
        <option>All</option>
        <option>Blue</option>
        <option>Earth Tones</option>
        <option>Yellow</option>
        <option>Red</option>
        <option>Violet</option>
        <option>Green</option>
        <option>White</option>
      </select>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    colorGroupSelect: (value) => dispatch(colorGroupSelect(value)),
  };
};

export default connect(null, mapDispatchToProps)(ColorGroupSelect);
