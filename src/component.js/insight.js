import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './directories/sidebar';
import { Link } from 'react-router-dom';
import config from '../config/config';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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

const Insight = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
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
                                <div className="order-table">
                                    <div className='insight-selct'>
                                        <h3>Insight</h3>
                                            <FormControl style={{width:"200px",marginBottom:"20px"}} className="select-time">
                                                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                                <Select
                                                fullWidth
                                                    labelId="demo-simple-select-label"
                                                    id="Select"
                                                    value={age}
                                                    label="Select"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Today</MenuItem>
                                                    <MenuItem value={20}>Last Week</MenuItem>
                                                    <MenuItem value={30}>Last Month</MenuItem>
                                                </Select>
                                            </FormControl>
                                    </div>
                                    <Row className='mb-3'>
                                        <Col sm={6}>
                                            <Row>
                                                <Col sm={4}>
                                                    <div className='status1'>
                                                        <h2>32</h2>
                                                        <div className='status-icon'>
                                                            {/* <img src='images/orderTheme.png' alt='icon'/> */}
                                                            <span>Orders</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className='status1'>
                                                        <h2>229</h2>
                                                        <div className='status-icon'>
                                                            {/* <img src='images/sold.png' alt='icon'/> */}
                                                            <span>Item Sold</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm={4}>
                                                    <div className='status1'>
                                                        <h2>$492.50</h2>
                                                        <div className='status-icon'>
                                                            {/* <img src='images/earnings.png' alt='icon'/> */}
                                                            <span>Earnings</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm={6}>
                                            <div className='create-new'>
                                                <Link to={`${config.baseUrl}`}>
                                                    <button type='button'>View All Transactions</button>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={7}>
                                            <div className='graph-section'>
                                                <div className='graph-head'>
                                                    <h2>Earnings</h2>
                                                </div>
                                                <div className='graph-img'>
                                                    <img src='images/graph.png' />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={5}>
                                            <div className='graph-section'>
                                                <div className='graph-head'>
                                                    <h2>Top 5 Selling item</h2>
                                                </div>
                                                <div className='item-table'>
                                                    <div className='item-names'>
                                                        <h3>Fresh Red Onions</h3>
                                                        <span>188 Sales</span>
                                                    </div>
                                                    <div className='item-names'>
                                                        <h3> Red Tomatoes</h3>
                                                        <span>188 Sales</span>
                                                    </div>
                                                    <div className='item-names'>
                                                        <h3>Fresh Lady Fingers</h3>
                                                        <span>188 Sales</span>
                                                    </div>
                                                    <div className='item-names'>
                                                        <h3>Fresh Red Onions</h3>
                                                        <span>188 Sales</span>
                                                    </div>
                                                    <div className='item-names'>
                                                        <h3>Fresh Red Onions</h3>
                                                        <span>188 Sales</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        {/* <Col md={3}>
                                            <div className='insight-status'>
                                                <div className='status1'>
                                                    <h2>32</h2>
                                                    <div className='icon'>
                                                    <img src='images/orderTheme.png' alt='icon'></img> <span>Total Order</span> 
                                                    </div>
                                                </div>
                                            </div>
                                            </Col> */}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Main>
            </Box>
        </>
    );
}
export default Insight;