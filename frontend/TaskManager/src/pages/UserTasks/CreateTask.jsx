import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { postTask } from '../../services/tasks/task.api';
import { useDispatch, useSelector } from 'react-redux'
import { logoutReducer } from '../../features/auth/authSlice';
import { addTaskReducer, clearTaskReducer } from '../../features/tasks/tasksSlice';
import './CreateTask.modules.css'
import ModalTask from '../../components/ModalTask';

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
        <ModalTask 
            show={show}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            textTitle="Crear">    
        </ModalTask>
        </>
    );
}

export default Example;
