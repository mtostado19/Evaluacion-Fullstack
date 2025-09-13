import Card from 'react-bootstrap/Card';

const CardsTasks = (props) => {

    const { titulo, descripcion, estado_actual } = props
    return (
        <Card
            bg={"Primary".toLowerCase()}
            key={"Primary"}
            text={"Primary".toLowerCase() === 'light' ? 'dark' : 'white'}
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