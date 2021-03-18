import axios from 'axios';

const ADD_COLOR = 'ADD_COLOR';

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

export { addColor, ADD_COLOR };
