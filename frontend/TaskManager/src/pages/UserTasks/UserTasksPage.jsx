import { useDispatch, useSelector } from 'react-redux'
import { loginReducer, logoutReducer } from "../../features/auth/authSlice"
import { use, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { getUserTasks } from '../../services/tasks/task.api'
import CreateTask from './CreateTask'
import { addTaskReducer } from '../../features/tasks/tasksSlice'
import UserTasksCardList from './UserTasksCardList'

const UserTasksPage = () => {

    const { isAuth, user, token } = useSelector((state) => state.auth)
    const { allTasksList } = useSelector((state) => state.tasks)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
        async function load() {
            console.log("load")
            const res = await getUserTasks(token, user.id)
            res.forEach(element => {
                dispatch(addTaskReducer(element))
            });

        }
        load()
    }, [])

    useEffect(() => {
        if (!isAuth){
            navigate('/')
        }
    }, [isAuth])


    return(
        <div>
            <CreateTask></CreateTask>
            {/* <div>
                {allTasksList.map((item) => (
                    <div key={item.id}>
                        titulo {item.titulo}
                    </div>
                ))}
            </div> */}
            <UserTasksCardList></UserTasksCardList>
        </div>
    )
}

export default UserTasksPage