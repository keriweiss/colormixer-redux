import axios from 'axios';

const GET_COLORS = 'GET_COLORS';

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

export { getColors, GET_COLORS };
