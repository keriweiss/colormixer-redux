import axios from 'axios';

const RESET_PALETTE = 'RESET_PALETTE';

const resetPalette = () => {
  return async (dispatch) => {
    await axios.delete('/api/palette');
    dispatch(_resetPalette());
  };
};

const _resetPalette = () => {
  return {
    type: RESET_PALETTE,
  };
};

export { RESET_PALETTE, resetPalette };
