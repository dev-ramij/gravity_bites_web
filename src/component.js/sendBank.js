import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './directories/sidebar';
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import Form from 'react-bootstrap/Form';


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

const SendBank = () => {

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
                                        <h2 className='title'>Send  To Bank</h2>

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
                                                        <h3>Bank Info</h3>
                                                        <Form>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Acount Holder Name</Form.Label>
                                                            <TextField fullWidth id="outlined-basic" defaultValue="Samantha Smith" variant="outlined" className='coupon-text' />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Bank Name</Form.Label>
                                                            <TextField fullWidth id="outlined-basic" defaultValue="HDFC Bank of India" variant="outlined" className='coupon-text' />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Branch Code</Form.Label>
                                                            <TextField fullWidth id="outlined-basic" defaultValue="010101" variant="outlined" className='coupon-text' />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Account Number</Form.Label>
                                                            <TextField fullWidth id="outlined-basic" defaultValue="1234567890" variant="outlined" className='coupon-text' />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Enter Amount To Transfer</Form.Label>
                                                            <TextField fullWidth id="outlined-basic" defaultValue="500" variant="outlined" className='coupon-text' />
                                                        </Form.Group>
                                                        </Form>
                                                        <div className='coupons-button mt-3'>
                                                            <button type='button' className='btn'>
                                                                Send to Bank
                                                            </button>

                                                        </div>

                                                    </div>
                                                </div>

                                            </Col>
                                            <Col md={3}>
                                            <div className='available-balance'>
                                                 <h2>Available balance</h2>
                                                 <p>$758.50</p>
                                                </div>
                                            </Col>

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
export default SendBank;