import type { Tour } from '../types'

const SIMILAR_LIMIT = 3

// Сначала туры того же типа, если их мало — добавляем любые другие. Внутри каждой группы более популярные идут раньше.
export function getSimilarTours(tour: Tour, all: Tour[]): Tour[] {
  const byPopularity = (a: Tour, b: Tour) => b.popularity - a.popularity

  const others = all.filter((candidate) => candidate.id !== tour.id)
  const sameType = others
    .filter((candidate) => candidate.type === tour.type)
    .sort(byPopularity)
  const otherTypes = others
    .filter((candidate) => candidate.type !== tour.type)
    .sort(byPopularity)

  return [...sameType, ...otherTypes].slice(0, SIMILAR_LIMIT)
}