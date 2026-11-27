export type TourType = 'excursion' | 'beach' | 'author'

export type IncludedKind =
  | 'flight'
  | 'accommodation'
  | 'breakfast'
  | 'transfer'
  | 'guide'
  | 'insurance'

export interface IncludedItem {
  kind: IncludedKind
  text: string
}

export interface ProgramStep {
  dayFrom: number
  dayTo: number
  items: string[]
}

export interface Place {
  name: string
  description: string
  image: string
}

export interface Tour {
  id: string
  title: string

  subtitle: string
  country: string
  type: TourType
  days: number
  price: number
 
  departure: string
  groupSize: number
  description: string
  image: string
  gallery: string[]
  included: IncludedItem[]
  program: ProgramStep[]
  places: Place[]
  cancellationNote: string
  popularity: number
}

export type ViewMode = 'grid' | 'list'

export interface MenuItem {
  label: string
  /** с какой стороны от логотипа стоит ссылка в шапке */
  position: 'left' | 'right'
  /** адрес страницы; если не задан, ссылка пока ничего не делает */
  to?: string
}