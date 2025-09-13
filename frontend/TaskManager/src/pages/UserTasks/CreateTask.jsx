import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { postTask } from '../../services/tasks/task.api';
import { useDispatch, useSelector } from 'react-redux'
import { logoutReducer } from '../../features/auth/authSlice';
import { addTaskReducer, clearTaskReducer } from '../../features/tasks/tasksSlice';
import './CreateTask.modules.css'

function Example() {
    const { isAuth, user, token } = useSelector((state) => state.auth)
    const { allTasksList } = useSelector((state) => state.tasks)
    const dispatch = useDispatch()


    const [show, setShow] = useState(false);
    const [estado_actual, setEstadoActual] = useState("pendiente");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value,
            estado_actual: e.target.estado.value,
            usuario: user.id,
        }

        console.log(data)
        const res = await postTask(token, data)
        console.log("res here", res)
        if (res.data !== null) {
            dispatch(addTaskReducer(res))
        }

        handleClose();
    };

    const handleLogout = () => {
        console.log("isauth", isAuth)
        dispatch(logoutReducer())
        dispatch(clearTaskReducer())
        console.log("isauth", isAuth)
    }

    return (
        <>
        <div className='btn-crear'>

            <Button variant="primary" onClick={handleShow}>
                Crear Tarea
            </Button>

            <Button variant='danger' onClick={handleLogout}>
                Logout
            </Button>

        </div>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                placeholder="Ingresa el titulo"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                                type="text"
                                name="descripcion"
                                placeholder="Una breve descripcion..."
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select
                                name="estado"
                                value={estado_actual}
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
        </>
    );
}

export default Example;
