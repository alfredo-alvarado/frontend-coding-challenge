import React from 'react';
import { Row, Col } from 'react-bootstrap';


interface Props {
    
}

const CampervansItem = (props: Props) => {
    return (
        <Col>
            <Row>
                <Col>
                    OK
                </Col>
                <Col>
                    Bye
                </Col>
            </Row>
        </Col>
    );
}

export default CampervansItem;
