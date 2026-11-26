import { useParams } from 'react-router'
import NotFound from '../components/NotFound/NotFound'
import { getTourById } from '../data/tours'


function BookingPage() {
  const { id } = useParams()
  const tour = id === undefined ? undefined : getTourById(id)

  if (tour === undefined) {
    return (
      <NotFound
        title="Тур не найден"
        text="Оформить можно только существующий тур. Посмотрите другие в каталоге."
      />
    )
  }

  return (
    <NotFound
      title="Скоро"
      text={`Оформление тура «${tour.title}» появится позже.`}
      linkTo={`/tours/${tour.id}`}
      linkText="Вернуться к туру"
    />
  )
}

export default BookingPage