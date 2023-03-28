import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './directories/sidebar';
import {TextField } from '@mui/material';
import Form from 'react-bootstrap/Form';
import TextareaAutosize from '@mui/material/TextareaAutosize';



const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Support = () => {

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar />
                <Main>
                    <DrawerHeader />
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className=''>
                                    {/* <div className='color-card'></div> */}
                                    <div className='review-card'>
                                        <h2 className='title'>Support</h2>

                                        <Row>
                                            <Col md={3}>
                                            <div className='back-button'>
                                                    <button type='button'>
                                                    <img src='images/left-arrow.png'/>
                                                    Back
                                                    </button>
                                                </div>
                                            </Col>
                                            <Col md={6}>

                                                <div style={{ position: "relative" }}>
                                                    <div className='coupon-card send-bank'>
                                                        <h3>Write us your queries</h3>
                                                        <Form>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Mobile Number</Form.Label>
                                                                <TextField fullWidth id="outlined-basic" placeholder='1234567890' variant="outlined" className='coupon-text' />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Your Message</Form.Label>
                                                                <TextareaAutosize
                                                                     style={{width:"100%"}}
                                                                    aria-label="minimum height"
                                                                    minRows={3}
                                                                    placeholder="Minimum 3 rows"
                                                                    className='coupon-text text-area'
                                                                    
                                                                />
                                                            </Form.Group>
                                                        </Form>
                                                        <div className='coupons-button mt-3'>
                                                            <button type='button' className='btn'>
                                                                Submit
                                                            </button>

                                                        </div>

                                                    </div>
                                                </div>

                                            </Col>
                                            <Col md={3}></Col>

                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Main>
            </Box>
        </>
    );
}
export default Support;