import type { MenuItem } from '../types'

export const menu: MenuItem[] = [
  { label: 'Главная', position: 'left' },
  { label: 'Туры', position: 'left', active: true },
  { label: 'О нас', position: 'right' },
  { label: 'Контакты', position: 'right' },
]