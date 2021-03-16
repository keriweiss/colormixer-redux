import React, { Component } from 'react';
import axios from 'axios';
import ColorChart from './ColorChart.jsx';
import Palette from './Palette.jsx';
import PaintInfo from './PaintInfo.jsx';
import PaletteInfo from './PaletteInfo.jsx';
import ColorGroupSelect from './ColorGroupSelect.jsx';
import { getColors } from './redux/actions.js';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // colors: [],
      swatches: [],
      // paintInfo: {},
      paletteInfo: [],
      // selectedColor: {},
    };
    this.addColor = this.addColor.bind(this);
    // this.colorInfo = this.colorInfo.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.resetPalette = this.resetPalette.bind(this);
    this.getPaletteInfo = this.getPaletteInfo.bind(this);
    this.changeOpacity = this.changeOpacity.bind(this);
    // this.selectColor = this.selectColor.bind(this);
    this.colorGroup = this.colorGroup.bind(this);
  }
  async componentDidMount() {
    await axios.delete('/api/palette');
    this.props.getColors();
  }

  async addColor(swatch, colorImg) {
    if (this.state.swatches.length >= 5) {
      alert('5 colors only.');
    } else {
      const addTo =
        this.state.swatches.length === 0
          ? { colorId: swatch, img: colorImg, opacity: 100 }
          : { colorId: swatch, img: colorImg };
      await axios.post('/api/palette', addTo);
      const palette = (await axios.get('/api/palette')).data;
      this.setState({ swatches: palette.sort((a, b) => a.id - b.id) });
    }
  }

  async colorGroup(group) {
    const colors = (await axios.get('/api/colors')).data;
    if (group === 'All') {
      this.setState({
        colors,
      });
    } else {
      const colorsByGroup = [];
      colors.map((color) => {
        if (group.toLowerCase().includes(color.colorgroupId)) {
          colorsByGroup.push(color);
        }
      });
      this.setState({ colors: colorsByGroup });
    }
  }

  async deleteColor(colorId) {
    await axios.delete(`/api/palette/${colorId}`);
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ swatches: palette.sort((a, b) => a.id - b.id) });
  }

  async resetPalette() {
    await axios.delete('/api/palette');
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ swatches: palette.sort((a, b) => a.id - b.id) });
  }

  async getPaletteInfo() {
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ paletteInfo: palette, paintInfo: {} });
  }

  async changeOpacity(value) {
    const colorId = this.state.selectedColor.id;
    await axios.put(`/api/palette/${colorId}`, { opacity: value });
    const palette = (await axios.get('/api/palette')).data;
    this.setState({ swatches: palette.sort((a, b) => a.id - b.id) });
  }

  render() {
    console.log('hi', this.props);
    let info;
    if (this.props.paintInfo.id) {
      info = <PaintInfo paintInfo={this.props.paintInfo} />;
    } else if (this.state.paletteInfo.length) {
      info = <PaletteInfo paletteInfo={this.state.paletteInfo} />;
    }
    return (
      <div id='main'>
        <ColorGroupSelect colorGroup={this.colorGroup} />
        <ColorChart addColor={this.addColor} />
        <Palette
          swatches={this.state.swatches}
          deleteColor={this.deleteColor}
          resetPalette={this.resetPalette}
          getPaletteInfo={this.getPaletteInfo}
          opacity={this.state.opacity}
          changeOpacity={this.changeOpacity}
        />
        {info}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { paintInfo: state.paintInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getColors: () => dispatch(getColors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
export { Main };
