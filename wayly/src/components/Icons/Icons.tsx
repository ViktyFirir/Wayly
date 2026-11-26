// as const: чтобы TypeScript не расширил строки до string и принял их как значения SVG-атрибутов
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" />
    </svg>
  )
}

export function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function ChevronUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="m6 14.5 6-6 6 6" />
    </svg>
  )
}

export function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  )
}