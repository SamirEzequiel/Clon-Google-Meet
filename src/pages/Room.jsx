import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MeetingControls from '../components/Controls';
import VideoTile from '../components/Video';

export default function Room() {
  const { roomId } = useParams();

  return (
    <Container fluid className="d-flex flex-column vh-100 bg-dark text-white p-0">
      <div className="p-3 border-bottom bg-black">
        <h5 className="m-0">Sala: {roomId}</h5>
      </div>

      <div className="flex-grow-1 d-flex flex-wrap justify-content-center align-items-center p-2">
        <VideoTile name="Tú" />
        <VideoTile name="Participante 2" />
      </div>

      <MeetingControls />
    </Container>
  );
}
