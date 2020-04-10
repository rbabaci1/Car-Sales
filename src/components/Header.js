import React from 'react';
import { connect } from 'react-redux';

const Header = ({ image, name, price }) => {
  return (
    <>
      <figure className='image is-128x128'>
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};

const mapStateToProps = ({ car }) => {
  return {
    image: car.image,
    name: car.name,
    price: car.price,
  };
};

export default connect(mapStateToProps, null)(Header);
