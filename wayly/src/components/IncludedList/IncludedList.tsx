import { includedLabels } from '../../data/labels'
import type { IncludedItem } from '../../types'
import { includedIcons } from './includedIcons'
import './IncludedList.css'

type IncludedListProps = {
  items: IncludedItem[]
}

function IncludedList({ items }: IncludedListProps) {
  return (
    <section className="included" aria-label="Что включено">
      <ul className="included__list">
        {items.map((item) => (
          <li key={`${item.kind}-${item.text}`} className="included__item">
            <div className="included__body">
              <h3 className="included__label">{includedLabels[item.kind]}</h3>
              <p className="included__text">{item.text}</p>
            </div>
            <span className="included__icon">
              <img
                className="included__icon-img"
                src={includedIcons[item.kind]}
                alt=""
              />
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default IncludedList