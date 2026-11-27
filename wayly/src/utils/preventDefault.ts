import type { MouseEvent } from 'react'

// Для ссылок-заглушек
export function preventDefault(event: MouseEvent): void {
  event.preventDefault()
}