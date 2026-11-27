import { useParams } from 'react-router'
import NotFound from '../components/NotFound/NotFound'
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

  const nights = tour.days - 1

  return (
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
    </main>
  )
}

export default TourPage