import { Link } from 'react-router'
import arrowRight from '../../assets/icons/arrow-right.svg'
import './BookingBar.css'

type BookingBarProps = {
  tourId: string
  note: string
}

function BookingBar({ tourId, note }: BookingBarProps) {
  return (
    <div className="booking">
      <p className="booking__note">{note}</p>

      <Link to={`/booking/${tourId}`} className="booking__cta">
        <span className="booking__label">Оформить</span>
        <span className="booking__arrow">
          <img className="booking__arrow-icon" src={arrowRight} alt="" />
        </span>
      </Link>
    </div>
  )
}

export default BookingBar