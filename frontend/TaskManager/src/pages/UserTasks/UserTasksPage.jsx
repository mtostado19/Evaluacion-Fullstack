import { useDispatch, useSelector } from 'react-redux'
import { loginReducer, logoutReducer } from "../../features/auth/authSlice"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { getUserTasks } from '../../services/tasks/task.api'
import CreateTask from './CreateTask'


const UserTasksPage = () => {

    const { isAuth, user, token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
        async function load() {
            console.log("load")
            const res = await getUserTasks(token, user.id)
            console.log(res)
        }
        load()
    }, [])


    return(
        <div>
            <CreateTask></CreateTask>
            user stuff here
        </div>
    )
}

export default UserTasksPage