import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaVideo, FaUsers } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1 bg-white position-relative">
        <Header />

        <Container className="text-center mt-5">
          <h1 className="fw-normal">
            Inicia una llamada o crea un enlace para una llamada de grupo
          </h1>
          <div className="d-flex justify-content-center mt-4 gap-3 flex-wrap">
            <Button variant="primary" size="lg" className="d-flex align-items-center gap-2 px-4">
              <FaVideo />
              Iniciar una llamada
            </Button>
            <Button variant="outline-primary" size="lg" className="d-flex align-items-center gap-2 px-4">
              <FaUsers />
              Crear enlace de grupo
            </Button>
          </div>
        </Container>

        {/* 🎉 Confeti decorativo */}
        <div className="position-absolute top-0 start-0 w-100 h-100 confetti"></div>
      </div>
    </div>
  );
}
