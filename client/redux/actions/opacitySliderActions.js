import axios from 'axios';

const CHANGE_OPACITY = 'CHANGE_OPACITY';

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

export { CHANGE_OPACITY, changeOpacity };
