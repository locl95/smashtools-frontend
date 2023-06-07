import React from 'react'
import { Select } from 'antd'
import { useAppDispatch } from '../../../../app/hooks'
import { Player } from './types'
import { setPlayer } from './playersSlice'

interface PlayerProps {
  players: Player[]
  isPlayerOne: Boolean
}
const PlayerSelector = (props: PlayerProps) => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <Select
        showSearch
        style={{ width: 300, marginTop: 10 }}
        placeholder='Select a player'
        optionFilterProp='children'
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        onSelect={value => dispatch(setPlayer([props.players.find(p => p.name === value)!, props.isPlayerOne]))}
        options={props.players.map(p => ({ value: p.name, label: p.name }))}
      />
    </div>
  )
}

export default PlayerSelector