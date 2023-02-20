import React from 'react';
import classes from './apartment-card.module.scss';
import ApartmentModel from '../../models/apartment-model';
import Button from '../../components/ui/button';

type ApartmentCardProps = ApartmentModel;

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  id,
  title,
  location,
  images,
  price,
  rating,
}) => (
  <div className={classes.card}>
    <img src={images[0]} alt="" className={classes.img} />
    <div className={classes.content}>

      <div className={classes.details}>
        <div className={classes.right}>
          <div className={classes.price}>{price}</div>
          <div className={classes.rating}>{rating}</div>
        </div>

        <h2 className={classes.title}>{title}</h2>
        <h3 className={classes.location}>{`${location.country}, ${location.city}`}</h3>
      </div>

      <div className={classes.btnContainer}>
        <Button color="primary" variant="outlined">View</Button>
        <Button color="dark">View</Button>
      </div>
    </div>
  </div>
);

export default ApartmentCard;
