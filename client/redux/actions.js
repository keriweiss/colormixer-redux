import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

const SELECT_COLOR = 'SELECT_COLOR';
const CHANGE_OPACITY = 'CHANGE_OPACITY';
const GET_COLORS = 'GET_COLORS';
const GET_PAINT_INFO = 'GET_PAINT_INFO';

const getPaintInfo = (color) => {
  return {
    type: GET_PAINT_INFO,
    color,
  };
};

const getColors = () => {
  return async (dispatch) => {
    const colors = (await axios.get('/api/colors')).data;
    dispatch(_getColors(colors));
  };
};

const _getColors = (colors) => {
  return {
    type: GET_COLORS,
    colors,
  };
};

const selectColor = (color) => {
  return {
    type: SELECT_COLOR,
    color,
  };
};

const _changeOpacity = (value) => {
  return async (dispatch) => {
    await axios.put(`/api/palette/${colorId}`, { opacity: value });
    const palette = (await axios.get('/api/palette')).data;
    dispatch(changeOpacity(palette));
  };
};

const changeOpacity = (palette) => {
  return {
    type: CHANGE_OPACITY,
    palette,
  };
};

export {
  SELECT_COLOR,
  selectColor,
  CHANGE_OPACITY,
  getColors,
  GET_COLORS,
  changeOpacity,
  GET_PAINT_INFO,
  getPaintInfo,
};
