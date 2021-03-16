import {
  CHANGE_OPACITY,
  SELECT_COLOR,
  GET_COLORS,
  GET_PAINT_INFO,
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
  //   if (action.type === CHANGE_OPACITY) {
  //     const selectedColor = state.selectedColor;
  //     return { };
  //   }
  return state;
};

export default reducer;
