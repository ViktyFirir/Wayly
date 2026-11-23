import type { ReactNode } from 'react'
import type { ViewMode } from '../../types'
import { GridIcon, ListIcon } from '../Icons/Icons'
import './ViewToggle.css'

type ViewToggleProps = {
  value: ViewMode
  onChange: (mode: ViewMode) => void
}

const options: { mode: ViewMode; label: string; icon: ReactNode }[] = [
  { mode: 'grid', label: 'Сетка', icon: <GridIcon /> },
  { mode: 'list', label: 'Список', icon: <ListIcon /> },
]

function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div className="view-toggle" role="group" aria-label="Вид каталога">
      {options.map((option) => (
        <button
          key={option.mode}
          type="button"
          className={`view-toggle__btn ${
            value === option.mode ? 'view-toggle__btn--active' : ''
          }`}
          aria-label={option.label}
          aria-pressed={value === option.mode}
          onClick={() => onChange(option.mode)}
        >
          {option.icon}
        </button>
      ))}
    </div>
  )
}

export default ViewToggle
