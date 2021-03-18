import axios from 'axios';

const GET_PALETTE_INFO = 'GET_PALETTE_INFO';

const getPaletteInfo = () => {
  return async (dispatch) => {
    const palette = (await axios.get('/api/palette')).data;
    dispatch(_getPaletteInfo(palette));
  };
};

const _getPaletteInfo = (paletteInfo) => {
  console.log('test action getpaletteinfo', paletteInfo);
  return {
    type: GET_PALETTE_INFO,
    paletteInfo,
  };
};

export { GET_PALETTE_INFO, getPaletteInfo };
