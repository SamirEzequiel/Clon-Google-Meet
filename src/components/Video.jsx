import { Card } from 'react-bootstrap';

export default function VideoTile({ name }) {
  return (
    <Card className="bg-secondary text-white m-2" style={{ width: '300px', height: '200px' }}>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <h5>{name}</h5>
      </Card.Body>
    </Card>
  );
}
