import { SELECT_COLOR } from './actions/selectColorAction';
import { GET_COLORS } from './actions/getColorActions';
import { COLOR_GROUP_SELECT } from './actions/colorGroupActions';
import { CHANGE_OPACITY } from './actions/opacitySliderActions';
import { GET_PALETTE_INFO } from './actions/paletteInfoAction';
import { RESET_PALETTE } from './actions/resetPaletteAction';
import { GET_PAINT_INFO } from './actions/paintInfoAction';
import { ADD_COLOR } from './actions/addColorAction';
import { DELETE_COLOR } from './actions/deleteColorAction';
import { combineReducers } from 'redux';

const colorsReducer = (state = [], action) => {
  if (action.type === GET_COLORS || action.type === COLOR_GROUP_SELECT) {
    return (state = action.colors);
  }
  return state;
};

const swatchesReducer = (state = [], action) => {
  if (action.type === RESET_PALETTE) {
    return (state = []);
  }
  if (
    action.type === ADD_COLOR ||
    action.type === CHANGE_OPACITY ||
    action.type === DELETE_COLOR
  ) {
    const palette = action.palette;
    return (state = palette.sort((a, b) => a.id - b.id));
  }
  return state;
};

const selectedColorReducer = (state = {}, action) => {
  if (action.type === SELECT_COLOR) {
    return (state = action.color);
  }
  return state;
};

const paintInfoReducer = (state = {}, action) => {
  if (action.type === GET_PAINT_INFO) {
    return (state = action.color);
  }
  if (action.type === GET_PALETTE_INFO) {
    return (state = {});
  }
  return state;
};

const paletteInfoReducer = (state = [], action) => {
  if (action.type === GET_PALETTE_INFO) {
    return (state = action.paletteInfo);
  }
  return state;
};

const reducer = combineReducers({
  selectedColor: selectedColorReducer,
  colors: colorsReducer,
  swatches: swatchesReducer,
  paintInfo: paintInfoReducer,
  paletteInfo: paletteInfoReducer,
});

export default reducer;
