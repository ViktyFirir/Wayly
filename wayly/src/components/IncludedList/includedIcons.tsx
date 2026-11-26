import accommodation from '../../assets/icons/accommodation.svg'
import breakfast from '../../assets/icons/breakfast.svg'
import flight from '../../assets/icons/flight.svg'
import guide from '../../assets/icons/guide.svg'
import insurance from '../../assets/icons/insurance.svg'
import transfer from '../../assets/icons/transfer.svg'
import type { IncludedKind } from '../../types'

// Record заставляет добавить иконку для каждого нового вида пункта
export const includedIcons: Record<IncludedKind, string> = {
  flight,
  accommodation,
  breakfast,
  transfer,
  guide,
  insurance,
}