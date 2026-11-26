import { useParams } from 'react-router'
import BookingBar from '../components/BookingBar/BookingBar'
import IncludedList from '../components/IncludedList/IncludedList'
import NotFound from '../components/NotFound/NotFound'
import PlacesList from '../components/PlacesList/PlacesList'
import PriceBadge from '../components/PriceBadge/PriceBadge'
import TourGallery from '../components/TourGallery/TourGallery'
import { getTourById } from '../data/tours'
import { dayForms, nightForms, pluralize } from '../utils/pluralize'
import './TourPage.css'

function TourPage() {
  const { id } = useParams()
  // id может быть undefined, поэтому сначала проверяем его, а потом ищем тур
  const tour = id === undefined ? undefined : getTourById(id)

  if (tour === undefined) {
    return (
      <NotFound
        title="Тур не найден"
        text="Такого тура нет или он больше не доступен. Посмотрите другие в каталоге."
      />
    )
  }

  // число ночей не хранится в данных, а считается
  const nights = tour.days - 1

  return (
    <div className="tour-page">
      <div className="tour-page__backdrop" aria-hidden="true">
        <img src={tour.image} alt="" />
      </div>

      <main className="tour">
        <header className="tour__head">
          <p className="tour__label">{tour.subtitle}</p>
          <h1 className="tour__title">{tour.title}</h1>
          <p className="tour__meta">
            {tour.days} {pluralize(tour.days, dayForms)} · {nights}{' '}
            {pluralize(nights, nightForms)} · вылет из {tour.departure} · группа до{' '}
            {tour.groupSize} человек
          </p>
        </header>

        {/* key сбрасывает номер фото при переходе на другой тур */}
        <TourGallery key={tour.id} images={tour.gallery} alt={tour.title}>
          <PriceBadge price={tour.price} />
        </TourGallery>

        <p className="tour__description">{tour.description}</p>

        <IncludedList items={tour.included} />
        <BookingBar tourId={tour.id} note={tour.cancellationNote} />
        <PlacesList places={tour.places} />
      </main>
    </div>
  )
}

export default TourPage