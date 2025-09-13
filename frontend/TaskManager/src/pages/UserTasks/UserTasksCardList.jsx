import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CardsTasks from '../../components/CardsTask';
import './userTasksCardList.modules.css';

function UserTasksCardList(props) {

    const { allTasksList } = useSelector((state) => state.tasks)

    const { filter } = props

    const [visibleTask, setVisibleTask] = useState(allTasksList)

    const updateList = () => {
        if (filter == '') {
            setVisibleTask(allTasksList)
        } else {
            setVisibleTask(allTasksList.filter((item) => item.estado_actual == filter))
        }
    }

    useEffect(() => {
        updateList()
    }, [filter, allTasksList])
    

    return (
        <>
        <div className="d-flex flex-wrap gap-3">

            {visibleTask.map((item) => (
                <CardsTasks key={item.id}
                titulo={item.titulo}
                descripcion={item.descripcion}
                estado_actual={item.estado_actual}
                id={item.id}
                ></CardsTasks>
            ))}
        </div>
        </>
    );
}

export default UserTasksCardList;