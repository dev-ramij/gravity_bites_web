import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../directories/sidebar';
import { Tab, Container, Row, Col,Tabs } from 'react-bootstrap';
import NewOrders from './newOrder';
import PastOrders from './pastOrder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import MessageIcon from '@mui/icons-material/Message';
// import CallIcon from '@mui/icons-material/Call';
// import FeedIcon from '@mui/icons-material/Feed';

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

const MyOrder = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar />
                <Main open={open}>
                    <DrawerHeader />
                    <div className='order-tab'>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    {/* <div className='order-details'>
                                        <div className='order-name'>
                                            <h2>Samantha</h2>
                                            <div className='call-to'>
                                                <MessageIcon sx={{ color: "#76d33a" }} />
                                                <CallIcon sx={{ color: "#76d33a" }} />
                                            </div>
                                        </div>
                                        <div className='other-details'>
                                            <p className='addr'>ITEM(s)</p>
                                            <table width="100%">
                                                <tr>
                                                    <th><p>Fresh Red onions</p></th>
                                                    <td className='quantity'> 1kg</td>
                                                    <td className='text-right'>$0</td>
                                                </tr>
                                                <tr>
                                                    <th><p>Fresh Ladt fingures</p> </th>
                                                    <td className='quantity'> 1kg</td>
                                                    <td className='text-right'>$0</td>
                                                </tr>
                                                <tr>
                                                    <th><p>Fresh Red tamatos</p></th>
                                                    <td className='quantity'> 1kg</td>
                                                    <td className='text-right'>$0</td>
                                                </tr>
                                            </table>
                                            <div className='confirmation'>
                                                <ThumbUpIcon color="success" /><span>Food is ready</span>
                                            </div>
                                        </div>
                                        <div className='other-details order-next'>
                                            <p className='addr'>Payment Info</p>
                                            <table width="100%">
                                                <tr>
                                                    <th><p>Sub total</p></th>
                                                    <td className='text-right'>$0</td>
                                                </tr>
                                                <tr>
                                                    <th><p>Service Fee</p> </th>
                                                    <td className='text-right'>$0</td>
                                                </tr>
                                                <tr>
                                                    <th><p>Cash on Delivery</p></th>
                                                    <td className='text-right'>$0</td>
                                                </tr>
                                            </table>
                                          
                                        </div>
                                    </div>
                                    <div className='delivery-boy'>
                                        <div className='delivery-box'>
                                            <div className='img'>
                                                <img src='images/boy.jpg'/>
                                            </div>
                                            <div className='name'>
                                                <h3>John L</h3>
                                                <span>Delivery Partner Assigned</span>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className='left-side'>
                                        <div className='product-name'>
                                            <Row>
                                                <Col md={8}>        
                                                <h2>Samantha Smith</h2>
                                                <span>OrderA000 | 22 june, 11:00am</span></Col>
                                                <Col md={4}>
                                                    <div className='status'>
                                                        <p>Pending</p>
                                                        <span>$20|COD</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='product-name'>
                                            <Row>
                                                <Col md={8}>        
                                                <h2>John L</h2>
                                                <span>OrderA000 | 22 june, 11:00pm</span></Col>
                                                <Col md={4}>
                                                    <div className='status'>
                                                        <p className='green'>Accepted</p>
                                                        <span>$20|COD</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='product-name'>
                                            <Row>
                                                <Col md={8}>        
                                                <h2>Doe K</h2>
                                                <span>OrderA000 | 22 june, 11:00am</span></Col>
                                                <Col md={4}>
                                                    <div className='status'>
                                                        <p>Pending</p>
                                                        <span>$20|COD</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='product-name'>
                                            <Row>
                                                <Col md={8}>        
                                                <h2> Barry M</h2>
                                                <span>OrderA000 | 22 june, 11:00am</span></Col>
                                                <Col md={4}>
                                                    <div className='status'>
                                                        <p className='completed'>Completed</p>
                                                        <span>$20|COD</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='product-name'>
                                            <Row>
                                                <Col md={8}>        
                                                <h2>UV J</h2>
                                                <span>OrderA000 | 22 june, 11:00am</span></Col>
                                                <Col md={4}>
                                                    <div className='status'>
                                                        <p>Pending</p>
                                                        <span>$20|COD</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='product-name'>
                                            <Row>
                                                <Col md={8}>        
                                                <h2>Thor S</h2>
                                                <span>OrderA000 | 22 june, 11:00am</span></Col>
                                                <Col md={4}>
                                                    <div className='status'>
                                                        <p>Pending</p>
                                                        <span>$20|COD</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={8}>
                                    <Tabs
                                        defaultActiveKey="home"
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="home" title="NEW">
                                            <NewOrders />
                                        </Tab>
                                        <Tab eventKey="prepare" title="PREPARING">
                                            <PastOrders />
                                        </Tab>
                                        <Tab eventKey="ready" title="COMPLETED">
                                            <PastOrders />
                                        </Tab>

                                        <Tab eventKey="profile" title="Past Order">
                                            <PastOrders />
                                        </Tab>


                                    </Tabs>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Main>
            </Box>
        </>
    );
}
export default MyOrder;