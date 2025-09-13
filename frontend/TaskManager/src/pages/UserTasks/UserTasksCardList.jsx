import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CardsTasks from '../../components/CardsTask';
import './userTasksCardList.modules.css';

function UserTasksCardList(props) {

    const { allTasksList } = useSelector((state) => state.tasks)

    const [estado, setEstado] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    console.log("INSIDE LIST", allTasksList)

    return (
        <>
        <div className="d-flex flex-wrap gap-3">

            {allTasksList.map((item) => (
                <CardsTasks key={item.id}
                titulo={item.titulo}
                descripcion={item.descripcion}
                estado_actual={item.estado_actual}
                ></CardsTasks>
            ))}
        </div>
        </>
    );
}

export default UserTasksCardList;