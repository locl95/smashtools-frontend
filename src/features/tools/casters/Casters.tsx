import React, { useEffect } from 'react'
import { Characters } from './characters/Characters'
import { Col, Radio, Row } from 'antd'
import PlayerSelector from './players/Player'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectPlayer1, selectPlayer2, selectPlayers, setPlayers } from './players/playersSlice'
import { easyFetch } from '../../../utils/utils'
import { Player } from './players/types'
import { Character, characterEquals, RANDOM_CHARACTER } from './characters/types'
import {
  selectCharacterForPlayer1,
  selectCharacterForPlayer2,
  setCharacterForPlayer,
} from './characters/charactersSlice'
import PlayerCharacter from './characters/PlayerCharacter'
import { Match, TEST_MATCHES } from './h2h/types'
import { setMatches } from './h2h/h2hSlice'
import { H2h } from './h2h/H2h'
import { isH2hViewMode, switchViewMode } from './castersSlice'

export function Casters() {

  const players = useAppSelector(selectPlayers)
  const characterForPlayer1 = useAppSelector(selectCharacterForPlayer1);
  const characterForPlayer2 = useAppSelector(selectCharacterForPlayer2);
  const player1 = useAppSelector(selectPlayer1);
  const player2 = useAppSelector(selectPlayer2);
  const isH2hView = useAppSelector(isH2hViewMode);
  const dispatch = useAppDispatch()

  const onDrop = (event: React.DragEvent<HTMLDivElement>, isPlayer1: Boolean) => {
    event.preventDefault();
    const character = JSON.parse(event.dataTransfer.getData('character')) as Character;
    dispatch(setCharacterForPlayer({character: character, isPlayer1: isPlayer1}));
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const bothCharactersSelected: Boolean = !characterEquals(characterForPlayer1, RANDOM_CHARACTER) && !characterEquals(characterForPlayer2, RANDOM_CHARACTER)
  const bothPlayersSelected: Boolean = player1 !== undefined && player2 !== undefined
  const allSet : Boolean = bothCharactersSelected && bothPlayersSelected
  useEffect(() => {
    // Dispatch the action to load the data when the component loads
    if (players.length === 0) {
      easyFetch<Player[]>('GET', 'players')
        .then((p) => dispatch(setPlayers(p)))
        .catch((e) => dispatch(setPlayers([{name: "Sisqui"}, {name: "Osuma"}])))
    }
  }, [])
  useEffect(() => {
    // Dispatch the action to load the data when the component loads
    if (bothPlayersSelected) {
      easyFetch<Match[]>('GET', 'h2h/' + player1 +'/' + player2)
        .then((m) => dispatch(setMatches(m)))
        .catch((e) => dispatch(setMatches(TEST_MATCHES)))
    }
  }, [player1, player2])

  return (
    <div>
      <Row>
        <Col span={6}><PlayerSelector players={players} isPlayerOne={true}/></Col>
        <Col span={12}>
          {allSet && (<Radio.Group style={{ marginTop: 10 }} defaultValue="h2h" buttonStyle="solid" onChange={(e) => dispatch(switchViewMode())}>
            <Radio.Button value="h2h">Head To Head</Radio.Button>
            <Radio.Button value="mu">Match-up</Radio.Button>
          </Radio.Group>)}
        </Col>
        <Col span={6}><PlayerSelector players={players} isPlayerOne={false}/></Col>
      </Row>
      <Row>
        <Col className="character-dropzone" span={6} onDrop={(event) => onDrop(event, true)} onDragOver={onDragOver}>
          <PlayerCharacter characterForPlayer={characterForPlayer1} isPlayer1={true}/>
        </Col>
        <Col span={12}>
          {bothPlayersSelected && isH2hView && <H2h/>}
        </Col>
        <Col className="character-dropzone" span={6} onDrop={(event) => onDrop(event, false)} onDragOver={onDragOver}>
          <PlayerCharacter characterForPlayer={characterForPlayer2} isPlayer1={false}/>
        </Col>
      </Row>
      {!bothCharactersSelected && <Characters/>}
    </div>
  )
}
