import { Button } from 'react-bootstrap';
import { FaVideo, FaUsers } from 'react-icons/fa';

export default function HomeActions() {
  return (
    <div className="text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center position-relative">
      <div className="confetti"></div>

      <h1 className="mb-4">
        Inicia una llamada o crea un enlace para una llamada de grupo
      </h1>

      <div className="d-flex gap-3">
        <Button variant="primary" className="px-4 py-2 d-flex align-items-center gap-2">
          <FaVideo /> Iniciar una llamada
        </Button>
        <Button variant="light" className="px-4 py-2 d-flex align-items-center gap-2 border">
          <FaUsers /> Crear enlace de grupo
        </Button>
      </div>
    </div>
  );
}
