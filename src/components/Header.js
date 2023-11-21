import { getHeaderDate } from '../util/dateUtil';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='h-25'>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start">
                        <span>{getHeaderDate()}</span>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div className='mani-placeholder'>
                        Mascot comes here
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="secondary">Archive</Button>
                    </Col>
                </Row>
            </Container>
        </header>
      );
        {/* <span>{getHeaderDate()}</span>
        <div className='mani-placeholder'>Mani lives here</div>
        <button> Archive </button> */}
}

export default Header;