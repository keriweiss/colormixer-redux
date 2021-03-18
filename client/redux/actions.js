import axios from 'axios';

const SELECT_COLOR = 'SELECT_COLOR';
// const DELETE_COLOR = 'DELETE_COLOR';

// const deleteColor = (color) => {
//   return async (dispatch) => {
//     await axios.delete(`/api/palette/${color}`);
//     const palette = (await axios.get('/api/palette')).data;
//     dispatch(_deleteColor(palette));
//   };
// };

// const _deleteColor = (palette) => {
//   return {
//     type: DELETE_COLOR,
//     palette,
//   };
// };

const selectColor = (color) => {
  return {
    type: SELECT_COLOR,
    color,
  };
};

export { SELECT_COLOR, selectColor };
