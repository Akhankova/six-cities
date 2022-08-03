import React, { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type AppProps = {
  previewImage: string;
  id: number;
  price: number;
  title: string;
  premium: boolean;
  type: string;
}

function Card(props: AppProps): JSX.Element {
  const { previewImage, id, price, title, premium, type } = props;
  const [activCard, setActivCard] = useState(0);

  const handleOfferFocus = () => {
    setActivCard(id);
    // eslint-disable-next-line no-console
    console.log(activCard);
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={handleOfferFocus}>
      {premium ? <div className="place-card__mark"><span>Premium</span></div> : '' }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, {id: id})}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default Card;
