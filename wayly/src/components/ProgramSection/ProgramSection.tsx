import type { ProgramStep } from '../../types'
import { formatProgramDays } from '../../utils/formatProgramDays'
import './ProgramSection.css'

type ProgramSectionProps = {
  steps: ProgramStep[]
}

function ProgramSection({ steps }: ProgramSectionProps) {
  if (steps.length === 0) return null

  return (
    <section className="program">
      <h2 className="program__title">Программа тура</h2>

      <div className="program__grid">
        {steps.map((step) => (
          <div key={`${step.dayFrom}-${step.dayTo}`} className="program__step">
            <h3 className="program__days">{formatProgramDays(step)}</h3>
            <ul className="program__items">
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramSection