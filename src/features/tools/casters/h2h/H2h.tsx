import { Col, Row } from 'antd'
import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { selectMatches } from './h2hSlice'
export function H2h() {
  const matches = useAppSelector(selectMatches)

  return (<div>
    {matches.map(m => <Row style={{ marginTop: 16 }}>
      <Col span={3}>{m.scorePlayer1}</Col>
      <Col span={12}>{m.tournament}</Col>
      <Col span={6}>{m.round}</Col>
      <Col span={3}>{m.scorePlayer2}</Col>
    </Row>
    )}
  </div>)

}