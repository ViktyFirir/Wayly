import type { MenuItem } from '../types'

export const menu: MenuItem[] = [
  { label: 'Главная', position: 'left', to: '/' },
  { label: 'Туры', position: 'left', to: '/tours' },
  { label: 'О нас', position: 'right' },
  { label: 'Контакты', position: 'right' },
]