import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { deleteTaskReducer, updateTaskReducer } from '../features/tasks/tasksSlice'
import { deleteTask, putTask } from '../services/tasks/task.api'

import ModalTask from './ModalTask';

const CardsTasks = (props) => {

    const { user, token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const { titulo, descripcion, estado_actual, id } = props
    const colorEstado = {
        Pendiente: "Info",
        EnProgreso: "Danger",
        Completada: "Success"
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = async () => {
        try {
            await deleteTask(token, id)
            dispatch(deleteTaskReducer(id))
        } catch {
            throw new Error
        }
    }

    const handleUpdate = async (e) => {
        try {
            e.preventDefault()
            const body = {
                titulo: e.target.titulo.value,
                descripcion: e.target.descripcion.value,
                estado_actual: e.target.estado.value,
                usuario: user.id
            }
            const res = await putTask(token, id, body)
            dispatch(updateTaskReducer(res))
            handleClose()
        } catch {
            throw new Error
        }
    }

    return (
        <div>

            <Card
                bg={colorEstado[estado_actual].toLowerCase()}
                key={colorEstado[estado_actual]}
                text={colorEstado[estado_actual].toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header className='cardTask-title' style={{ display:'flex', justifyContent:'space-between'}}>
                    <div style={{ fontSize: "1.4rem"}}>
                        {estado_actual}
                    </div>
                    <Button variant='primary' onClick={handleDelete}>X</Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title> {titulo} </Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Button variant='secondary' onClick={handleShow}>Editar</Button>
                </Card.Body>
            </Card>

            <ModalTask
                show={show}
                handleClose={handleClose}
                handleSubmit={handleUpdate}
                textTitle="Editar"
                titulo={titulo}
                descripcion={descripcion}
            ></ModalTask>
            
        </div>

    )
}

export default CardsTasks