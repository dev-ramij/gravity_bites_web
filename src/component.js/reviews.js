import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './directories/sidebar';

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
const reviews = [
    {
        image : "images/review1.jpg",
        name :"Dua L",
        date:"12 december 2019"
    },
    {
        image : "images/review2.jpg",
        name :"John K",
        date:"20 january 2022",
    },
    {
        image : "images/review2.jpg",
        name :"Barry L",
        date:"1 march 2020"
    }
]
const Reviews = () => {

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
                          <div className='white-card'>
                                <div className='review-card'>
                                    <h2 className='title'>Reviews and Rating</h2>
                                    {reviews.map(topic=>
                                    <div className='review-item'>
                                        <Row>
                                            <Col sm={6}>
                                                <div className='info'>
                                                    <div className='info-img'>
                                                    <img src={topic.image} />
                                                    </div>
                                                  <div className='info-title'>
                                                  <h2>{topic.name}</h2>
                                                    <p>{topic.date}</p>
                                                  </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className='star'>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                               <div className='comment'>
                                               <p>
                                                    <i class="fa fa-comment" aria-hidden="true"></i><span>7</span>
                                                </p>
                                               </div>
                                            </Col>
                                            <Col sm={12}>
                                                <div className='messege'>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    )}
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
export default Reviews;