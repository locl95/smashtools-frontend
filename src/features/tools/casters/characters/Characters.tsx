import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import {
  setCharacters,
  selectCharacters,
  selectCharacterForPlayer1,
  selectCharacterForPlayer2,
  setCharacterForPlayer,
} from './charactersSlice'
import { easyFetch } from '../../../../utils/utils';
import { Character, characterEquals, characterImageForPlayer, notRandom, RANDOM_CHARACTER } from './types'
import { Col, Row } from 'antd';
import './Characters.css';
import { images } from './images'

export function Characters() {
  const characters = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch the action to load the data when the component loads
    if (characters.length === 0) {
      easyFetch<Character[]>('GET', 'characters')
        .then((c) => dispatch(setCharacters(c)))
        .catch((e) => console.log(e));
    }
  }, []);

  const onDragStart = (event: React.DragEvent<HTMLImageElement>, character: Character) => {
    event.dataTransfer.setData('character', JSON.stringify(character));
  };

  return (
    <div>
        <Row>
          {characters.map((c) => (
            <Col key={c.slug} >
              <img
                src={images[c.slug.replace('/', '')]}
                height={64}
                alt={c.slug}
                draggable
                onDragStart={(event) => onDragStart(event, c)}
              />
            </Col>
          ))}
        </Row>
    </div>
  );
}
