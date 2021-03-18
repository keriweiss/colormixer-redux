import axios from 'axios';

const DELETE_COLOR = 'DELETE_COLOR';

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

export { DELETE_COLOR, deleteColor };
