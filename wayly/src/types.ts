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

export interface MenuItem {
  label: string
  /** с какой стороны от логотипа стоит ссылка в шапке */
  position: 'left' | 'right'
  active?: boolean
}