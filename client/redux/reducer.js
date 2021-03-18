import { SELECT_COLOR } from './actions/selectColorAction';
import { GET_COLORS } from './actions/getColorActions';
import { COLOR_GROUP_SELECT } from './actions/colorGroupActions';
import { CHANGE_OPACITY } from './actions/opacitySliderActions';
import { GET_PALETTE_INFO } from './actions/paletteInfoAction';
import { RESET_PALETTE } from './actions/resetPaletteAction';
import { GET_PAINT_INFO } from './actions/paintInfoAction';
import { ADD_COLOR } from './actions/addColorAction';
import { DELETE_COLOR } from './actions/deleteColorAction';

const initialState = {
  selectedColor: {},
  colors: [],
  swatches: [],
  paintInfo: {},
  paletteInfo: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === SELECT_COLOR) {
    const selectedColor = action.color;
    return { ...state, selectedColor: selectedColor };
  }
  if (action.type === GET_COLORS) {
    const colors = action.colors;
    return { ...state, colors: colors };
  }
  if (action.type === GET_PAINT_INFO) {
    const paintInfo = action.color;
    return { ...state, paintInfo: paintInfo };
  }
  if (action.type === GET_PALETTE_INFO) {
    const paletteInfo = action.paletteInfo;
    return { ...state, paletteInfo: paletteInfo };
  }
  if (action.type === RESET_PALETTE) {
    return { ...state, swatches: [] };
  }
  if (action.type === ADD_COLOR) {
    const palette = action.palette;
    return { ...state, swatches: palette.sort((a, b) => a.id - b.id) };
  }
  if (action.type === DELETE_COLOR) {
    const palette = action.palette;
    return { ...state, swatches: palette.sort((a, b) => a.id - b.id) };
  }
  if (action.type === CHANGE_OPACITY) {
    const palette = action.palette;
    return { ...state, swatches: palette.sort((a, b) => a.id - b.id) };
  }
  if (action.type === COLOR_GROUP_SELECT) {
    const colors = action.colors;
    return { ...state, colors: colors };
  }
  return state;
};

export default reducer;
