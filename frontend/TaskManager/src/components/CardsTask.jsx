import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux'
import { deleteTaskReducer } from '../features/tasks/tasksSlice'
import { deleteTask } from '../services/tasks/task.api'

const CardsTasks = (props) => {

    const { allTasksList } = useSelector((state) => state.tasks)
    const { isAuth, user, token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const { titulo, descripcion, estado_actual, id } = props
    const colorEstado= {
        Pendiente: "Info",
        EnProgreso: "Danger",
        Completada: "Success"
    }

    const handleDelete = async () => {
        try {
            console.log(id)
            const res = await deleteTask(token, id)
            dispatch(deleteTaskReducer(id))
        } catch {
            throw new Error
        }
        console.log("delete")
    }

    const handleUpdate = () => {
        console.log("update")
    }

    return (
        <Card
            bg={colorEstado[estado_actual].toLowerCase()}
            key={colorEstado[estado_actual]}
            text={colorEstado[estado_actual].toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header>
                {estado_actual}
                <Button variant='primary' onClick={handleDelete}>X</Button>
            </Card.Header>
            <Card.Body>
                <Card.Title> {titulo} </Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                <Button variant='secondary'>Editar</Button>
            </Card.Body>
        </Card>

    )
}

export default CardsTasks