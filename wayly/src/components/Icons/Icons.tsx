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

export function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="m14.5 6-6 6 6 6" />
    </svg>
  )
}

export function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  )
}

export function PlaneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
      <path d="m10 13 4-4" />
    </svg>
  )
}

export function BedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M3 6v12M3 15h18v3M21 15v-3a3 3 0 0 0-3-3h-8v6" />
      <circle cx="6.5" cy="11" r="1.6" />
    </svg>
  )
}

export function CupIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M5 9h11v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M16 10h1.5a2 2 0 0 1 0 4H16M7 4.5v2M10.5 4.5v2" />
    </svg>
  )
}

export function CarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M4 15v-3l2-5h12l2 5v3H4ZM4 15v2.5h3V15M17 15v2.5h3V15" />
      <circle cx="8" cy="12.5" r=".6" />
      <circle cx="16" cy="12.5" r=".6" />
    </svg>
  )
}

export function CompassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="8" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  )
}

export function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    </svg>
  )
}