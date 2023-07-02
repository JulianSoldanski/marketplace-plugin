import React from 'react';
import './tile.css';
import Rating from '@mui/material/Rating';

/**
 * Creates a Tile representing one Service 
 * @param {*} image image of the Service
 * @param {*} title title of the Service
 * @param {*} price price of the Service
 * @param {*} description description of the Service
 * @param {*} buttonLink link of "Mehr Erfahren"
 * @param {*} rating rating of the Service
 * @param {*} ratingCount amount of ratings of the Service
 * @param {*} certificate certificate of the Service
 * @returns UI Element
 */

const Tile = ({ image,  title, price, description, buttonLink, rating, ratingCount, certificate}) => {

  /**
   * Sets favorite
   * @param {*} event event to receive Target clicked 
   * TODO: Functionality Missing
   */
  const toggleFavorite = (event) => {
    event.target.classList.toggle('isFavorite');
  }

  /**
   * Function to add to cart 
   * TODO: Functionality Missing
   */
  const addToCart = () => {
    alert(title + 'added to Cart!');
  }


  return (
    <div className="tile">
      <img src={image} alt="" className="tile_image"  />
      {certificate  ? (<div className="tile_extra">{certificate}</div>) : ""}
      <div className="tile_like dashicons dashicons-heart" onClick={toggleFavorite}> </div>
      <div className="tile_div">
        <div className="tile_title_div">
          <div className="tile_title">{title}</div>
          <div className="tile_price">{price} €</div>
        </div>
        <div className="tile_description">{description}</div>
        <div className="tile_bottom_row">
          <a href="#" className="tile_rating_div">
          <Rating size="small" name="read-only" value={rating} readOnly />      
          <span className="tile_rating_count">{ratingCount}</span>
          </a>
          <button className="tile_button" href={buttonLink}>Mehr erfahren <span className="dashicons dashicons-arrow-right-alt2"></span></button>
          <span className="tile_shopping dashicons dashicons-cart" onClick={addToCart}></span>
        </div>
      </div>
    </div>
  );
}

export default Tile;
