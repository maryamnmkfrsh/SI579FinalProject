import { Row, Col, Container, ProgressBar  } from 'react-bootstrap';

const CurrentTask = () => {
    return (
        // <div className="my-2 py-2" style={{boxSizing: 'border-box', backgroundColor: 'white'}}>
        <Container className="p-2 m-2">
            <Row>
                <Col className="d-flex flex-row justify-content-between">
                    {/* TODO: make it dynamic */}
                    <h2>Current Task</h2>
                    <h2>30:00</h2>
                </Col>
            </Row>
            <Row className='p-0'>
                <ProgressBar className="p-0 w-75 mx-auto" now={60} />
            </Row>
        </Container>
            
        // </div>
    );
}

export default CurrentTask; 