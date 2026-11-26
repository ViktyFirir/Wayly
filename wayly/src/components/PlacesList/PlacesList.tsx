import type { Place } from '../../types'
import './PlacesList.css'

type PlacesListProps = {
  places: Place[]
}

function PlacesList({ places }: PlacesListProps) {
  if (places.length === 0) return null

  return (
    <section className="places">
      <h2 className="places__title">Места тура</h2>

      <ul className="places__list">
        {places.map((place) => (
          <li key={place.name} className="places__item">
            <img
              className="places__image"
              src={place.image}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3 className="places__name">{place.name}</h3>
              <p className="places__text">{place.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PlacesList