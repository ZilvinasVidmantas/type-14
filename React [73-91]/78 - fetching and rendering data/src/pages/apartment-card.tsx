import React from 'react';
import ApartmentModel from '../models/apartment-model';

type ApartmentCardProps = ApartmentModel;

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  id,
  title,
  location,
  images,
  price,
  rating,
}) => (
  <div style={{
    display: 'inline-block',
    border: '2px solid red',
    width: 300,
  }}
  >
    <img
      src={images[0]}
      alt=""
      style={{ width: 300 }}
    />
    <ul>
      <li>
        <span>id</span>
        <strong>{id}</strong>
      </li>
      <li>
        <span>title</span>
        <strong>{title}</strong>
      </li>
      <li>
        <span>location</span>
        <strong>{`${location.country}, ${location.city}`}</strong>
      </li>

      <li>
        <span>price</span>
        <strong>{price}</strong>
      </li>
      <li>
        <span>rating</span>
        <strong>{rating}</strong>
      </li>
    </ul>
  </div>
);

export default ApartmentCard;
