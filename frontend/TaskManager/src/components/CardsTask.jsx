import Card from 'react-bootstrap/Card';

const CardsTasks = (props) => {

    const { titulo, descripcion, estado_actual } = props
    const colorEstado= {
        Pendiente: "Info",
        EnProgreso: "Danger",
        Completada: "Success"
    }
    return (
        <Card
            bg={colorEstado[estado_actual].toLowerCase()}
            key={colorEstado[estado_actual]}
            text={colorEstado[estado_actual].toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header>{estado_actual}</Card.Header>
            <Card.Body>
                <Card.Title> {titulo} </Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default CardsTasks