import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Map from '../Map/Map';
import Weather from '../Weather/Weather';

const Home = () => {
    const [getLatAndLng, setLatAndLng] = useState({})

    return (
        <div className="pb-5">
            <Row className="w-100 px-1">
                <Col md={6}>
                    <Weather getLatAndLng={getLatAndLng}/>
                </Col>
                <Col md={6}>
                    <Map getLatAndLng={getLatAndLng} setLatAndLng={setLatAndLng}/>
                </Col>
            </Row>
        </div>
    );
};

export default Home;