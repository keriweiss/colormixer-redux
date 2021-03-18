import axios from 'axios';

const SELECT_COLOR = 'SELECT_COLOR';
const CHANGE_OPACITY = 'CHANGE_OPACITY';
const GET_COLORS = 'GET_COLORS';
const GET_PAINT_INFO = 'GET_PAINT_INFO';
const GET_PALETTE_INFO = 'GET_PALETTE_INFO';
const RESET_PALETTE = 'RESET_PALETTE';
const ADD_COLOR = 'ADD_COLOR';
const DELETE_COLOR = 'DELETE_COLOR';
const COLOR_GROUP_SELECT = 'COLOR_GROUP_SELECT';

const colorGroupSelect = (group) => {
  return async (dispatch) => {
    const colors = (await axios.get('/api/colors')).data;
    if (group === 'All') {
      dispatch(_colorGroupSelect(colors));
    } else {
      const colorsByGroup = [];
      colors.map((color) => {
        if (group.toLowerCase().includes(color.colorgroupId)) {
          colorsByGroup.push(color);
        }
      });
      dispatch(_colorGroupSelect(colorsByGroup));
    }
  };
};

const _colorGroupSelect = (colors) => {
  return {
    type: COLOR_GROUP_SELECT,
    colors,
  };
};

const changeOpacity = (value) => {
  return async (dispatch, getState) => {
    const state = getState();
    const colorId = state.selectedColor.id;
    await axios.put(`/api/palette/${colorId}`, { opacity: value });
    const palette = (await axios.get('/api/palette')).data;
    dispatch(_changeOpacity(palette));
  };
};

const _changeOpacity = (palette) => {
  return {
    type: CHANGE_OPACITY,
    palette,
  };
};

const deleteColor = (color) => {
  return async (dispatch) => {
    await axios.delete(`/api/palette/${color}`);
    const palette = (await axios.get('/api/palette')).data;
    dispatch(_deleteColor(palette));
  };
};

const _deleteColor = (palette) => {
  return {
    type: DELETE_COLOR,
    palette,
  };
};

const addColor = (swatch, colorImg) => {
  return async (dispatch, getState) => {
    const state = getState();
    if (state.swatches.length >= 5) {
      alert('5 colors only.');
    } else {
      const addTo =
        state.swatches.length === 0
          ? { colorId: swatch, img: colorImg, opacity: 100 }
          : { colorId: swatch, img: colorImg };
      await axios.post('/api/palette', addTo);
      const palette = (await axios.get('/api/palette')).data;
      dispatch(_addColor(palette));
    }
  };
};

const _addColor = (palette) => {
  return {
    type: ADD_COLOR,
    palette,
  };
};

const resetPalette = () => {
  return async (dispatch) => {
    await axios.delete('/api/palette');
    // const palette = (await axios.get('/api/palette')).data;
    dispatch(_resetPalette());
  };
};

const _resetPalette = () => {
  return {
    type: RESET_PALETTE,
  };
};

const getPaletteInfo = () => {
  return async (dispatch) => {
    const palette = (await axios.get('/api/palette')).data;
    dispatch(_getPaletteInfo(palette));
    dispatch(getPaintInfo({}));
  };
};

const _getPaletteInfo = (paletteInfo) => {
  console.log('test action getpaletteinfo', paletteInfo);
  return {
    type: GET_PALETTE_INFO,
    paletteInfo,
  };
};

const getPaintInfo = (color) => {
  return {
    type: GET_PAINT_INFO,
    color,
  };
};

const getColors = () => {
  return async (dispatch, getState) => {
    console.log(getState());
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

export {
  SELECT_COLOR,
  selectColor,
  CHANGE_OPACITY,
  changeOpacity,
  getColors,
  GET_COLORS,
  GET_PAINT_INFO,
  getPaintInfo,
  GET_PALETTE_INFO,
  getPaletteInfo,
  resetPalette,
  RESET_PALETTE,
  ADD_COLOR,
  addColor,
  DELETE_COLOR,
  deleteColor,
  COLOR_GROUP_SELECT,
  colorGroupSelect,
};
