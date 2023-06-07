import { Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

export function Tools() {
  const navigate = useNavigate()
  return (
    <div>
      <Row>
          <Col span={6}>
            <img
              height={"100%"}
              width={"100%"}
              onClick={() =>navigate('/casters')}
              src={"https://static.vecteezy.com/system/resources/thumbnails/000/420/512/small/Multimedia__28138_29.jpg"}
              alt={"casters"}
            />
          </Col>
        <Col span={6}>
          <img
            height={"100%"}
            width={"100%"}
            src={"https://d1k5j68ob7clqb.cloudfront.net/processed/meta/wq219yQZa7DgH81hAF.png"}
            alt={"casters"}
          />
        </Col>
        <Col span={6}>
          <img
            height={"100%"}
            width={"100%"}
            src={"https://static.thenounproject.com/png/2103887-200.png"}
            alt={"casters"}
          />
        </Col>
        <Col span={6} >
          <img
            height={"100%"}
            width={"100%"}
            src={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png"}
            alt={"casters"}
          />
        </Col>
      </Row>
    </div>
  );
}
