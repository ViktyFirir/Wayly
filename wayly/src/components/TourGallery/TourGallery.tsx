import { useState, type ReactNode } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '../Icons/Icons'
import './TourGallery.css'

type Direction = 'next' | 'prev'

type TourGalleryProps = {
  images: string[]
  alt: string

  children?: ReactNode
}

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

function TourGallery({ images, alt, children }: TourGalleryProps) {
  const [index, setIndex] = useState(0)
  // куда «поехало» фото: от этого зависит направление анимации
  const [direction, setDirection] = useState<Direction>('next')
  const total = images.length

  if (total === 0) return null

  // по кругу: после последнего фото снова первое, перед первым — последнее
  const prevIndex = (index - 1 + total) % total
  const nextIndex = (index + 1) % total
  const canSwitch = total > 1

  const next = () => {
    setDirection('next')
    setIndex(nextIndex)
  }
  const prev = () => {
    setDirection('prev')
    setIndex(prevIndex)
  }

  return (
    <figure className="gallery">
      <div className="gallery__frame">
        {canSwitch && (
          <button
            type="button"
            className="gallery__peek gallery__peek--top"
            onClick={prev}
            aria-label="Предыдущее фото"
          >
            <img src={images[prevIndex]} alt="" />
          </button>
        )}

        <div className="gallery__main">
          <button
            type="button"
            className="gallery__photo"
            onClick={next}
            disabled={!canSwitch}
            aria-label="Следующее фото"
          >
            <img
              key={index}
              className={`gallery__image gallery__image--${direction}`}
              src={images[index]}
              alt={`${alt}, фото ${index + 1}`}
            />
          </button>

          {canSwitch && (
            <>
              <button
                type="button"
                className="gallery__arrow gallery__arrow--up"
                onClick={prev}
                aria-label="Предыдущее фото"
              >
                <ChevronUpIcon />
              </button>
              <button
                type="button"
                className="gallery__arrow gallery__arrow--down"
                onClick={next}
                aria-label="Следующее фото"
              >
                <ChevronDownIcon />
              </button>
            </>
          )}

          {children}
        </div>

        {canSwitch && (
          <button
            type="button"
            className="gallery__peek gallery__peek--bottom"
            onClick={next}
            aria-label="Следующее фото"
          >
            <img src={images[nextIndex]} alt="" />
          </button>
        )}

        {canSwitch && (
          <div className="gallery__track" aria-hidden="true">
            <span
              className="gallery__thumb"
              style={{ height: `${100 / total}%`, top: `${(100 / total) * index}%` }}
            />
          </div>
        )}
      </div>

      <figcaption className="gallery__counter">
        {pad(index + 1)} / {pad(total)}
      </figcaption>
    </figure>
  )
}

export default TourGallery