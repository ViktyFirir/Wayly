import { useState, type ReactNode } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons/Icons'
import './TourGallery.css'

type TourGalleryProps = {
  images: string[]
  alt: string
  /** то, что лежит поверх фото, например плашка с ценой */
  children?: ReactNode
}

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

function TourGallery({ images, alt, children }: TourGalleryProps) {
  const [index, setIndex] = useState(0)
  const total = images.length

  if (total === 0) return null

  // по кругу: после последнего фото снова первое, перед первым — последнее
  const next = () => setIndex((current) => (current + 1) % total)
  const prev = () => setIndex((current) => (current - 1 + total) % total)
  const canSwitch = total > 1

  return (
    <figure className="gallery">
      <div className="gallery__frame">
        <button
          type="button"
          className="gallery__photo"
          onClick={next}
          disabled={!canSwitch}
          aria-label="Следующее фото"
        >
          <img src={images[index]} alt={`${alt}, фото ${index + 1}`} />
        </button>

        {canSwitch && (
          <>
            <button
              type="button"
              className="gallery__arrow gallery__arrow--prev"
              onClick={prev}
              aria-label="Предыдущее фото"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className="gallery__arrow gallery__arrow--next"
              onClick={next}
              aria-label="Следующее фото"
            >
              <ChevronRightIcon />
            </button>

            <div className="gallery__track" aria-hidden="true">
              <span
                className="gallery__thumb"
                style={{ height: `${100 / total}%`, top: `${(100 / total) * index}%` }}
              />
            </div>
          </>
        )}

        {children}
      </div>

      <figcaption className="gallery__counter">
        {pad(index + 1)} / {pad(total)}
      </figcaption>
    </figure>
  )
}

export default TourGallery