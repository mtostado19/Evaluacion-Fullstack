import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux'

const ModalTask = (props) => {

    const { isAuth, user, token } = useSelector((state) => state.auth)
    const { allTasksList } = useSelector((state) => state.tasks)
    const dispatch = useDispatch()

    const { show, handleClose, handleSubmit, textTitle, titulo, descripcion } = props
    const [estado_actual, setEstadoActual] = useState("Pendiente");

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{textTitle} tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            type="text"
                            name="titulo"
                            placeholder="Ingresa el titulo"
                            defaultValue={titulo}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            name="descripcion"
                            defaultValue={descripcion}
                            placeholder="Una breve descripcion..."
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Select
                            name="estado"
                            defaultValue={estado_actual}
                            onChange={(e) => setEstadoActual(e.target.value)}
                            required
                        >
                            <option value="Pendiente">Pendiente</option>
                            <option value="EnProgreso">En progreso</option>
                            <option value="Completada">Completada</option>
                        </Form.Select>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ModalTask