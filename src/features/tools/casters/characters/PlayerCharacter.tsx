import { Character, characterImageForPlayer, notRandom, RANDOM_CHARACTER } from './types'
import { Button } from 'antd'
import { CloseCircleTwoTone } from '@ant-design/icons'
import { setCharacterForPlayer } from './charactersSlice'
import React from 'react'
import { useAppDispatch } from '../../../../app/hooks'

interface PlayerCharacterProps {
  characterForPlayer: Character
  isPlayer1: Boolean
}

const PlayerCharacter = (props: PlayerCharacterProps) => {

  const dispatch = useAppDispatch();

  return (
  <div>
    {characterImageForPlayer(props.characterForPlayer)}
    {notRandom(props.characterForPlayer) && <Button type="text" shape="circle" icon={<CloseCircleTwoTone />} className="remove-character" onClick={() => dispatch(setCharacterForPlayer({character: RANDOM_CHARACTER, isPlayer1: props.isPlayer1}))}/>}
  </div>
)
}

export default PlayerCharacter