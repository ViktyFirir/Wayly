import type { IncludedKind, TourType } from '../types'

export const typeLabels: Record<TourType, string> = {
  excursion: 'Экскурсионный',
  beach: 'Пляжный',
  author: 'Авторский',
}
export const includedLabels: Record<IncludedKind, string> = {
  flight: 'Перелёт',
  accommodation: 'Проживание',
  breakfast: 'Завтраки',
  transfer: 'Трансферы',
  guide: 'Сопровождение',
  insurance: 'Страховка',
}