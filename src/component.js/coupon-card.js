import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Sidebar from './directories/sidebar';
import Vendors from './venors';
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

const CouponsCard = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar />
                <Main open={open}>
                    <DrawerHeader />
                    <div className='order-tab'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Container>
                                <Row>
                                <div className='review-card'>
                                        <h2 className='title'>Live Discount</h2>
                                    </div>
                                <Col md={12}>
                                            <div className='create-new'>
                                            <Link to={`${config.baseUrl}coupons`}>
                                                <button type='button'>Add New</button>
                                                </Link>
                                            </div>
                                        </Col>
                                    <Col sm={2} className='mt-4 p-0'>
                                        <Nav variant="pills" className="flex-column ms-0">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Vendors</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fruits">Admin</Nav.Link>
                                            </Nav.Item>
                                           
                                        </Nav>
                                    </Col>
                                    <Col sm={10} className='p-0'>
                                        {/* <div className="order-table"> */}
                                            {/* <h3>My Products</h3> */}

                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <Vendors />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fruits">
                                                <Vendors />
                                                </Tab.Pane>
                                               
                                            </Tab.Content>
                                        {/* </div> */}

                                    </Col>
                                </Row>
                            </Container>
                        </Tab.Container>
                    </div>
                </Main>
            </Box>
        </>
    );
}
export default CouponsCard;