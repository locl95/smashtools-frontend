export interface Match {
  round: string
  scorePlayer1: number
  scorePlayer2: number
  tournament: string
}

export interface H2hState {
  matches: Match[]
}

const RANDOM_MATCH = {
  round: 'WSF',
  scorePlayer1: 3,
  scorePlayer2: 2,
  tournament: 'Tech Republic IV',
}
export const TEST_MATCHES = [RANDOM_MATCH, RANDOM_MATCH, RANDOM_MATCH, RANDOM_MATCH, RANDOM_MATCH, RANDOM_MATCH, RANDOM_MATCH, RANDOM_MATCH, RANDOM_MATCH, RANDOM_MATCH,
]