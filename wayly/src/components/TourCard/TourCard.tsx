import { typeLabels } from '../../data/labels'
import type { Tour, ViewMode } from '../../types'
import { formatPrice } from '../../utils/formatPrice'
import { dayForms, pluralize } from '../../utils/pluralize'
import { ArrowIcon } from '../ArrowIcon'
import './TourCard.css'

export type TourCardProps = {
  tour: Tour
  view: ViewMode
}

function TourCard({ tour, view }: TourCardProps) {
  const { title, country, type, days, price, image } = tour

  return (
    <article className={`tour-card tour-card--${view}`}>
      <div className="tour-card__media">
        {/* дублирует ссылку в названии, поэтому скрыта от клавиатуры и читалок экрана */}
        <a href="#" className="tour-card__image-link" aria-hidden="true" tabIndex={-1}>
          <img
            className="tour-card__image"
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </a>

        <span className="tour-card__country">{country}</span>

        <button
          type="button"
          className="tour-card__fav"
          aria-label="Добавить в избранное"
        >
          <span className="tour-card__heart" aria-hidden="true" />
        </button>

        <div className="tour-card__caption">
          <span className="tour-card__type">{typeLabels[type]}</span>
          <h3 className="tour-card__title">
            <a href="#">{title}</a>
          </h3>
        </div>
      </div>

      <div className="tour-card__body">
        <ul className="tour-card__meta">
          <li>
            {days} {pluralize(days, dayForms)}
          </li>
          <li>Авторская программа</li>
        </ul>

        <div className="tour-card__footer">
          <p className="tour-card__price">
            <span className="tour-card__price-label">Стоимость от</span>
            {formatPrice(price)}
          </p>

          <button type="button" className="tour-card__go" aria-label={`Подробнее: ${title}`}>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </article>
  )
}

export default TourCard