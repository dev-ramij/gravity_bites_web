import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Container, Row, Col } from 'react-bootstrap';
import Sidebar from './directories/sidebar';
import { Link } from 'react-router-dom';
import config from '../config/config';


// import Sonnet from '../../components/Sonnet';

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
const topicList = [
    {
        name: 'Order num 212217',
        order: '222145',
        price: "$20",
        deliver: "Online",
        date: "June 20 ,11,11:35am",
        earnPrice:"$14.4"
    },
    {
        name: 'Order num 212234',
        order: '111256',
        price: "$40",
        deliver: "Online",
        date: "January 30 ,13:35am",
        earnPrice:"$4.9"
    }, {
        name: 'Send to Bank',
        order: '3223232',
        price: "$50",
        deliver: "Online",
        date: "June 20 ,11,11:35am",
        earnPrice:"$5.02"
    }, {
        name: 'Order num 55467',
        order: '11111',
        price: "$28",
        deliver: "Online",
        date: "June 20 ,11,11:35am",
        earnPrice:"$10.4"
    }, {
        name: 'Order num 99999',
        order: '222145',
        price: "$20",
        deliver: "Online",
        date: "June 20 ,11,11:35am",
        earnPrice:"$04.8"
    }, {
        name: 'Send to Bank',
        order: '222145',
        price: "$20",
        deliver: "Online",
        date: "June 20 ,11,11:35am",
        earnPrice:"$14.4"
    },
];
const Wallet = () => {

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar />
                <Main >
                    <DrawerHeader />
                    <div className="order-container">
                        <div className="order-list">
                            <Container>
                                <div className='head-title'>
                                    <h2>Wallet</h2>
                                    <div className='wallet-balance'>
                                        
                                        <div className='bal'>
                                            <span>Available balance</span>
                                            <p>$758</p>
                                        </div>
                                        <Link to={`${config.baseUrl}send-bank`}>
                                        <button type='button'>
                                            Send to Bank
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            <Row>
                                <Col md={12} className='ps-0'>
                                    <div className="order-table">
                                        {topicList.map(topic =>
                                            <div className="order-item">
                                                <Row>
                                                    
                                                    <Col md={3}>
                                                        <div className=" tableSection">
                                                            <h2> {topic.name}</h2>
                                                            {/* <p>{topic.order}</p> */}

                                                        </div>
                                                    </Col>

                                                    <Col md={3}>
                                                        <div className=" tableSection">
                                                            <h2>{topic.price}</h2>
                                                            <p>{topic.deliver}</p>
                                                        </div>
                                                    </Col>
                                                    <Col md={3}>
                                                        <div className="section-two tableSection">
                                                            <h2>{topic.earnPrice}</h2>
                                                            <p>Earning</p>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                    <div  className="tableSection">
                                                    <span>3 Items </span>
                                                            <p>{topic.date}</p>
                                                    </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                        </div>
                    </div>
                </Main>
            </Box>
        </>
    );
}
export default Wallet;