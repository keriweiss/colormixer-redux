const GET_PAINT_INFO = 'GET_PAINT_INFO';

const getPaintInfo = (color) => {
  return {
    type: GET_PAINT_INFO,
    color,
  };
};

export { GET_PAINT_INFO, getPaintInfo };
