import { formatPrice } from '../../utils/formatPrice'
import './PriceBadge.css'

type PriceBadgeProps = {
  price: number
}

function PriceBadge({ price }: PriceBadgeProps) {
  return (
    <div className="price-badge">
      <p className="price-badge__value">от {formatPrice(price)}</p>
      <p className="price-badge__note">за человека, всё включено</p>
    </div>
  )
}

export default PriceBadge