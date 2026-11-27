import TourCard from '../TourCard/TourCard'
import type { Tour } from '../../types'
import './SimilarTours.css'

type SimilarToursProps = {
  tours: Tour[]
}

function SimilarTours({ tours }: SimilarToursProps) {
  if (tours.length === 0) return null

  return (
    <section className="similar">
      <h2 className="similar__title">Похожие варианты</h2>

      <div className="similar__grid">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} view="grid" />
        ))}
      </div>
    </section>
  )
}

export default SimilarTours