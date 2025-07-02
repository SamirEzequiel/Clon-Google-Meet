import { Button, ButtonGroup } from 'react-bootstrap';
import { FaMicrophone, FaVideo, FaPhoneSlash, FaEllipsisH } from 'react-icons/fa';

export default function MeetingControls() {
  return (
    <div className="bg-black p-3 d-flex justify-content-center border-top">
      <ButtonGroup>
        <Button variant="secondary" className="mx-2">
          <FaMicrophone size={20} />
        </Button>
        <Button variant="secondary" className="mx-2">
          <FaVideo size={20} />
        </Button>
        <Button variant="danger" className="mx-2">
          <FaPhoneSlash size={20} />
        </Button>
        <Button variant="secondary" className="mx-2">
          <FaEllipsisH size={20} />
        </Button>
      </ButtonGroup>
    </div>
  );
}
