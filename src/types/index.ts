export type CriterionId =
  | 'graphic-quality'
  | 'legibility'
  | 'pregnance'
  | 'singularity'
  | 'versatility'
  | 'reproducibility'
  | 'scalability'
  | 'longevity'
  | 'semantic-relevance'
  | 'identity-strategy'
  | 'report'

export type ScoreCategory = 'technical' | 'identity'

export interface CriterionScore {
  score: number
  notes: string
}

export interface Criterion {
  id: CriterionId
  number: number
  title: string
  category: ScoreCategory
  definition: string
  explanation: string
  evaluationNotes: string[]
  quote?: {
    text: string
    source: string
  }
}

export interface CriterionState {
  score: number
  notes: string
  checkedNotes: boolean[]
}

export interface LogoState {
  dataUrl: string | null
  fileName: string | null
}

export interface UIState {
  activeCriterion: CriterionId
  isGridVisible: boolean
}
