import { useState } from 'react'
import TourCard from '../components/TourCard/TourCard'
import ViewToggle from '../components/ViewToggle/ViewToggle'
import { tours } from '../data/tours'
import type { ViewMode } from '../types'
import { pluralize, tourForms } from '../utils/pluralize'
import './CatalogPage.css'

function CatalogPage() {
  const [view, setView] = useState<ViewMode>('grid')

  return (
    <main className="catalog">
      <section className="catalog__hero">
        <h1 className="catalog__title">Найдите своё следующее путешествие</h1>
        <p className="catalog__subtitle">
          Подберите маршрут по настроению, направлению и бюджету. Мы собрали
          путешествия, к которым хочется возвращаться.
        </p>
      </section>

      <div className="catalog__bar">
        <p className="catalog__count">
          Найдено {tours.length} {pluralize(tours.length, tourForms)}
        </p>
        <ViewToggle value={view} onChange={setView} />
      </div>

      <div className={`catalog__list catalog__list--${view}`}>
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} view={view} />
        ))}
      </div>
    </main>
  )
}

export default CatalogPage