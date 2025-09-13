import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { getUserTasks } from '../../services/tasks/task.api'
import CreateTask from './CreateTask'
import { addTaskReducer } from '../../features/tasks/tasksSlice'
import UserTasksCardList from './UserTasksCardList'
import Form from 'react-bootstrap/Form';


const UserTasksPage = () => {


    const [filterVal, setFilterVal] = useState("")

    const { isAuth, user, token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
        async function load() {
            if (!user) return
            const res = await getUserTasks(token, user.id)
            res.forEach(element => {
                dispatch(addTaskReducer(element))
            });

        }
        load()
    }, [])

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const handleFilter = (e) => {
        setFilterVal(e.target.value)
        console.log("oh", filterVal)
    }


    return (
        <div>
            <CreateTask></CreateTask>
            <div>
                <Form.Select aria-label="Default select example" style={{width: "20rem", marginBottom:"2rem"}} onChange={handleFilter}>
                    <option value="">Todas</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="EnProgreso">En Progreso</option>
                    <option value="Completada">Completada</option>
                </Form.Select>
            </div>
            <UserTasksCardList filter={filterVal}></UserTasksCardList>
        </div>
    )
}

export default UserTasksPage