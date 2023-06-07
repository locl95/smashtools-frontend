import charactersReducer, { setCharacterForPlayer, setCharacters } from './charactersSlice'
import { CharactersState, RANDOM_CHARACTER } from './types'

describe('characters reducer', () => {
  const initialState: CharactersState = {
    characters: [],
    characterForPlayer1: RANDOM_CHARACTER,
    characterForPlayer2: RANDOM_CHARACTER,
  }
  it('should handle initial state', () => {
    expect(charactersReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle set characters', () => {
    const actual = charactersReducer(initialState, setCharacters([{ slug: '/sheik', name: 'Sheik' }]))
    expect(actual.characters).toEqual([{ slug: '/sheik', name: 'Sheik' }])
  })

  it('should handle set character for player 1', () => {
    const actual = charactersReducer(initialState, setCharacterForPlayer({
      character: { slug: '/sheik', name: 'Sheik' },
      isPlayer1: true,
    }))
    expect(actual.characterForPlayer1).toEqual({ slug: '/sheik', name: 'Sheik' })
    expect(actual.characterForPlayer2).toEqual(initialState.characterForPlayer2)
  })

  it('should handle set character for player 2', () => {
    const actual = charactersReducer(initialState, setCharacterForPlayer({
      character: { slug: '/sheik', name: 'Sheik' },
      isPlayer1: false,
    }))
    expect(actual.characterForPlayer2).toEqual({ slug: '/sheik', name: 'Sheik' })
    expect(actual.characterForPlayer1).toEqual(initialState.characterForPlayer2)
  })
})
