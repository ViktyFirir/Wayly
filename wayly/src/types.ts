export type TourType = 'excursion' | 'beach' | 'author'

export interface Tour {
  id: string
  title: string
  country: string
  type: TourType
  days: number
  price: number
  image: string
  popularity: number
}
export type ViewMode = 'grid' | 'list'