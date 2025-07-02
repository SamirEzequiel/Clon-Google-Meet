import { FaSearch, FaQuestionCircle, FaCog, FaTh } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom">
      <div className="d-flex align-items-center gap-2">
        <img src="https://ssl.gstatic.com/meet/logo/meet_2020q4_icon.svg" alt="logo" width="32" />
        <h5 className="m-0">Google Meet</h5>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="bg-light rounded-pill px-3 py-1 d-flex align-items-center">
          <FaSearch className="me-2 text-muted" />
          <input className="border-0 bg-transparent" placeholder="Buscar contactos o marcar" />
        </div>
        <FaQuestionCircle />
        <FaCog />
        <FaTh />
        <div className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center" style={{ width: '32px', height: '32px' }}>
          S
        </div>
      </div>
    </div>
  );
}
