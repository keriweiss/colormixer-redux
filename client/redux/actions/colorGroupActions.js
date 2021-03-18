import axios from 'axios';

const COLOR_GROUP_SELECT = 'COLOR_GROUP_SELECT';

const colorGroupSelect = (group) => {
  return async (dispatch) => {
    const colors = (await axios.get('/api/colors')).data;
    if (group === 'All') {
      dispatch(_colorGroupSelect(colors));
    } else {
      const colorsByGroup = [];
      colors.map((color) => {
        if (group.toLowerCase().includes(color.colorgroupId)) {
          colorsByGroup.push(color);
        }
      });
      dispatch(_colorGroupSelect(colorsByGroup));
    }
  };
};

const _colorGroupSelect = (colors) => {
  return {
    type: COLOR_GROUP_SELECT,
    colors,
  };
};

export { COLOR_GROUP_SELECT, colorGroupSelect };
