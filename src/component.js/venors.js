import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './directories/sidebar';
import config from '../config/config';
import { Link } from 'react-router-dom';



const Vendors = () => {
    const [open, setOpen] = React.useState(false);

    const topicList = [
        {
            rupees:"10.30%"
        },
        {
            rupees:"15.30%"
        },
        {
            rupees:"20.30%"
        },
        {
            rupees:"20.30%"
        },
        {
            rupees:"20.30%"
        } ,
        {
            rupees:"20.30%"
        },
        {
            rupees:"20.30%"
        } ,
        {
            rupees:"20.30%"
        },
        {
            rupees:"20.30%"
        },
        {
            rupees:"20.30%"
        },
        {
            rupees:"20.30%"
        },
        {
            rupees:"20.30%"
        },
    ]

    return (
        <>
        
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className=''>
                                    <Row >
                                        
                                    {topicList.map(topic =>
                                        <Col md={3} className='mt-4'>
                                            <div className='discount-card'>
                                                <Row>
                                                    <Col xs={4}>
                                                        <div className='discount'>
                                                           <img src='images/discount.png'/>
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} className='p-0'>
                                                        <div className='upto'>
                                                            <p>Free delivery on orders abouve Rs {topic.rupees}</p>
                                                        </div>
                                                   </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12}>
                                                        <div className='from-to'>
                                                           <div className='dates'> <span>From</span><span>04/08/208-12AM</span></div>
                                                           <div className='dates'> <span>To</span><span>04/08/208-12AM</span></div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    )}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                
        </>
    );
}
export default Vendors;