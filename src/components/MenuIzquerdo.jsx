import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

export default function SideMenu() {
  return (
    <div className="border-end p-3" style={{ width: '200px', height: 'calc(100vh - 56px)' }}>
      <div className="mb-3 fw-bold">Reuniones</div>
      <div className="bg-primary text-white rounded py-2 px-3 d-flex align-items-center gap-2">
        <FaPhoneAlt />
        <span>Llamadas</span>
      </div>
    </div>
  );
}


