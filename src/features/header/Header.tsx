import React from 'react';
import './Header.css';
import { Col, Row } from 'antd' // Make sure to import your CSS file

function Header() {
  return (
    <Row className={"header"}>
      <Col span={8}><img src={"./kos.webp"} alt={"logo"}/> </Col>
      <Col span={8}><span className={"title"}>SMASH TOOLS</span></Col>
      <Col span={8}/>
    </Row>
  );
}

export default Header;