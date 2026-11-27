import type { ProgramStep } from '../types'

// «День 1», если этап из одного дня, иначе «Дни 2–3»
export function formatProgramDays({ dayFrom, dayTo }: ProgramStep): string {
  return dayFrom === dayTo ? `День ${dayFrom}` : `Дни ${dayFrom}–${dayTo}`
}