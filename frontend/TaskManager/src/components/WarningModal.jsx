import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WarningModal = () => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>¡Advetencia!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>¿Seguro que quieres borrar la tarea?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Salir</Button>
          <Button variant="primary">Borrar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;