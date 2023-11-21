import { Row, Col, ProgressBar  } from 'react-bootstrap';

const CurrentTask = () => {
    return (
        <div className="my-2" style={{backgroundColor: 'white'}}>
            <Row>
                <Col className="d-flex flex-row justify-content-between">
                    {/* TODO: make it dynamic */}
                    <h2>Current Task</h2>
                    <h2>30:00</h2>
                </Col>
            </Row>
            <Row>
                <ProgressBar now={60} />;
            </Row>

            
        </div>
    );
}

export default CurrentTask; 