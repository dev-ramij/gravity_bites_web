import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../directories/sidebar';
import { Tab, Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Vegetables from './vegetables';
import Fruits from './fruit';
import Herbs from './herbs';
import Dairy from './dairy';


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

const MyProducts = () => {
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
                                    <Col sm={2} className='mt-2 p-0'>
                                        <Nav variant="pills" className="flex-column ms-0 me-2">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Vegetables</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fruits">Fruits</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="herbs">Herbs</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="dairy">Dairy</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={10} className='p-0'>
                                        <div className="order-table">
                                            <h3>My Products</h3>

                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <Vegetables />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fruits">
                                                    <Fruits />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="herbs">
                                                    <Herbs />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="dairy">
                                                    <Dairy />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </div>

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
export default MyProducts;