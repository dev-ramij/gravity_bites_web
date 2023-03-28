import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './directories/sidebar';
import { InputLabel, MenuItem, FormControl, Select, TextField, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
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

const EditProduct = () => {
    const [age, setAge] = React.useState('');
    const [age2, setAge2] = React.useState('');
    const [file, setFile] = useState();
    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const handleChange1 = (event) => {
        setAge(event.target.value);
    };
    const handleChange2 = (event) => {
        setAge2(event.target.value);
    };
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
                                        <h2 className='title'>Edit product</h2>

                                        <Row>
                                            <Col md={2}>
                                            <div className='back-button'>
                                                    <button type='button'>
                                                    <img src='images/left-arrow.png'/>
                                                    Back
                                                    </button>
                                                </div>
                                            </Col>
                                            <Col md={7}>

                                                <div style={{ position: "relative" }}>
                                                    <div className='coupon-card send-bank'>
                                                       
                                                        <Row className='mb-4'>
                                                            <Col sm={12}>
                                                                <h2 className='title text-center'>Feature Image</h2>
                                                                <div className="d-create-file" >
                                                                    <img style={{ height: '100px', width: '100px' }} id="image" className="object-cover w-full h-32" src="images/mango.jpg" />
                                                                    <input type="button" id="get_file" className="btn-main" defaultValue="Browse" />
                                                                    <input type="file" accept=".png,.jpg,.gif,.webo,.mp4" onChange={handleChange} id="upload_file" name="image" />
                                                                </div>
                                                            </Col>

                                                        </Row>
                                                        <h2 className='title mb-3'>Item Pricing</h2>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div className='product-lable'>
                                                                    <p>Product Name</p>
                                                                </div>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                    <TextField fullWidth  defaultValue="Mangos" id="outlined-basic" variant="outlined" className='coupon-text' />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={3}>
                                                                <div className='product-lable'>
                                                                    <p>Packaging Charges</p>
                                                                </div>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                    <TextField fullWidth defaultValue="22" id="outlined-basic" variant="outlined" className='coupon-text' />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={3}>
                                                                <div className='product-lable'>
                                                                    <p>Product Discription</p>
                                                                </div>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" rows={2} defaultValue="Fresh mangos"/>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={3}>
                                                                <div className='product-lable'>
                                                                    <p>Item Category</p>
                                                                </div>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                    <FormControl fullWidth>
                                                                        <InputLabel id="demo-simple-select-label">Item Category</InputLabel>
                                                                        <Select
                                                                            labelId="demo-simple-select-label"
                                                                            id="demo-simple-select"
                                                                            value={age2}
                                                                            onChange={handleChange2}
                                                                            className="coupon-text mb-3"
                                                                            label='Item Category'
                                                                        >
                                                                            <MenuItem value={10}>250</MenuItem>
                                                                            <MenuItem value={20}>300</MenuItem>
                                                                            <MenuItem value={30}>500</MenuItem>
                                                                        </Select>
                                                                    </FormControl>
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div style={{ position: "relative" }} className="mt-4">
                                                    <div className='coupon-card send-bank'>
                                                    <h2 className='title mb-3'>Add specification</h2>
                                                        <Row>
                                                            <Col md={6}>
                                                            <Form.Label>Add specification</Form.Label>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                    <TextField defaultValue="Extra chees" fullWidth id="outlined-basic" variant="outlined" className='coupon-text' />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={6}>
                                                            <Form.Label>Price</Form.Label>

                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                    <TextField placeholder='$3' defaultValue="5" fullWidth id="outlined-basic" variant="outlined" className='coupon-text' />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>


                                                        <div className='coupons-button'>
                                                            <button type='button' className='btn'>
                                                                Add Product
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col md={2}></Col>

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
export default EditProduct;