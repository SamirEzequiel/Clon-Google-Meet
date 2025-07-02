import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaCog, FaQuestionCircle, FaTh, FaCommentAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
      <InputGroup style={{ maxWidth: '400px' }}>
        <InputGroup.Text><FaSearch /></InputGroup.Text>
        <FormControl placeholder="Buscar contactos o marcar" />
      </InputGroup>

      <div className="d-flex align-items-center gap-3">
        <FaQuestionCircle />
        <FaCommentAlt />
        <FaCog />
        <FaTh />
        <div className="bg-success rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
          S
        </div>
      </div>
    </div>
  );
}
