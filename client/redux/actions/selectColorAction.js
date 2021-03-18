const SELECT_COLOR = 'SELECT_COLOR';

const selectColor = (color) => {
  return {
    type: SELECT_COLOR,
    color,
  };
};

export { SELECT_COLOR, selectColor };
