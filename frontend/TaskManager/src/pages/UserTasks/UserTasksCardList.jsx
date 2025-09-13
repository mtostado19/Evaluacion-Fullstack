import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CardsTasks from '../../components/CardsTask';

function UserTasksCardList(props) {

    const { allTasksList } = useSelector((state) => state.tasks)

    const [estado, setEstado] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    console.log("INSIDE LIST", allTasksList)

    return (
        <>
            {allTasksList.map((item) => (
                <CardsTasks 
                    titulo={item.titulo}
                    descripcion={item.descripcion}
                    estado_actual={item.estado_actual}
                ></CardsTasks>
            ))}
        </>
    );
}

export default UserTasksCardList;