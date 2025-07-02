import { ListGroup } from 'react-bootstrap';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="bg-light border-end p-3" style={{ width: '220px' }}>
      <h5 className="mb-4 text-primary">Google Meet</h5>
      <ListGroup variant="flush">
        <ListGroup.Item action active>
          <FaCalendarAlt className="me-2" /> Reuniones
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaPhoneAlt className="me-2" /> Llamadas
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
