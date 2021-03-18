import React from 'react';
import { connect } from 'react-redux';

const PaintInfo = (props) => {
  const { name, brands, pigment } = props.paintInfo;
  return (
    <div id='paintinfo'>
      <p>Name: {name}</p>
      <p>Pigment: {pigment}</p>
      Available at:
      {brands.map((brand) => {
        return (
          <div key={brand.name} className='brand'>
            <ul>
              <a href={brand.url}>{brand.name}</a>
            </ul>
            <ul>{brand.location}</ul>
            <ul>${brand.brand_offering.price}</ul>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { paintInfo: state.paintInfo };
};

export default connect(mapStateToProps)(PaintInfo);
