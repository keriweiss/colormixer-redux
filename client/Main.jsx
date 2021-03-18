import React, { Component } from 'react';
import axios from 'axios';
import ColorChart from './ColorChart.jsx';
import Palette from './Palette.jsx';
import PaintInfo from './PaintInfo.jsx';
import PaletteInfo from './PaletteInfo.jsx';
import ColorGroupSelect from './ColorGroupSelect.jsx';
import { getColors } from './redux/actions/getColorActions.js';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await axios.delete('/api/palette');
    this.props.getColors();
  }

  render() {
    let info;
    if (this.props.paintInfo.id) {
      info = <PaintInfo />;
    } else if (this.props.paletteInfo.length) {
      info = <PaletteInfo />;
    }
    return (
      <div id='main'>
        <ColorGroupSelect />
        <ColorChart />
        <Palette />
        {info}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    paintInfo: state.paintInfo,
    paletteInfo: state.paletteInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getColors: () => dispatch(getColors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
