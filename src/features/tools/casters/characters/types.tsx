import React from 'react'


export interface Character {
    slug: string,
    name: string
}

export interface SetCharacterAction {
    character:Character,
    isPlayer1: Boolean
}

export const RANDOM_CHARACTER: Character = {
    slug: '/random',
    name: 'random'
}

export interface CharactersState {
    characters: Character[]
    characterForPlayer1: Character
    characterForPlayer2: Character
}

export function characterImageForPlayer(character: Character): JSX.Element {
    return (<img alt={character.name} src={character.name+ '.webp'} style={{height: "300px"}} />)
}

//TODO: How the fuck we can make an extension method
export function characterEquals(me: Character, other: Character): Boolean {
    return JSON.stringify(me) === JSON.stringify(other)
}

export function notRandom(me: Character): Boolean {
    return JSON.stringify(RANDOM_CHARACTER) !== JSON.stringify(me)
}