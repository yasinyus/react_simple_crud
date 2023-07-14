//import component Bootstrap React
import { Card, Container, Row, Col , Button } from 'react-bootstrap'

function Home() {
    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                        <h1>MY NAME IS REACT CRUD</h1>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;