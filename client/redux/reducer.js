import {
  CHANGE_OPACITY,
  SELECT_COLOR,
  GET_COLORS,
  GET_PAINT_INFO,
  GET_PALETTE_INFO,
  RESET_PALETTE,
  ADD_COLOR,
  DELETE_COLOR,
  COLOR_GROUP_SELECT,
} from './actions';

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
