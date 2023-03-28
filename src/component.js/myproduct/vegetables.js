import React from "react";
import { Tab, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import config from "../../config/config";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const topicList = [
    {
        name: 'Fresh Onions',
        order: '222145',
        price: "$20",
        image: "images/onion.png"

    },
    {
        name: 'Fresh Red Tamatos',
        order: '111256',
        price: "$40",
        image: "images/tomato.jpg"
    },
    {
        name: 'Fresh Lady Fingers',
        order: '3223232',
        price: "$50",
        image: "images/lady.jpg"

    },
    {
        name: 'Fresh Onions',
        order: '222145',
        price: "$20",
        image: "images/onion.png"

    },
    {
        name: 'Fresh Red Tamatos',
        order: '111256',
        price: "$40",
        image: "images/tomato.jpg"
    },
    {
        name: 'Fresh Lady Fingers',
        order: '3223232',
        price: "$50",
        image: "images/lady.jpg"

    },



];
const Vegetables = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
            <div className="order-container">
                <div className="order-list">
                    <Row>
                        <Col md={12} className='ps-0'>
                            <div className="add-item d-flex">
                                <Form className="">
                                    <Form.Control
                                        type="search"
                                        placeholder="&#xF002; Search" 
                                        style={{fontFamily:"Arial, FontAwesome",marginRight:"10px"}}
                                        aria-label="Search"
                                    />
                                </Form>
                                <Link to={`${config.baseUrl}add-product`} className="d-flex ms-auto">
                                <button type='button' className='btn add-btn'>
                                    Add New
                                </button>
                                </Link>
                            </div>
                            {topicList.map(topic =>
                                <div className="order-item">
                                    <Row>

                                        <Col md={4} className='d-flex align-items-center'>
                                            <div className=" tableSection">
                                                <h2> {topic.name}</h2>
                                                <p>{topic.price}</p>
                                            </div>
                                        </Col>

                                        <Col md={4} className='d-flex align-items-center'>
                                            <div className=" tableSection">
                                                <Switch {...label} onClick={handleOpen} defaultChecked />
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="section-two tableSection">
                                                <Link to={`${config.baseUrl}edit-product`}>
                                                <button type='button' className='btn'>
                                                    Edit
                                                </button>
                                                </Link>
                                                <button type='button' className='btn'>
                                                    Delete
                                                </button>
                                                {/* <div className="select-countity">
                                                        <Form.Select aria-label="Default select example">
                                                            <option>1 kg</option>
                                                            <option value="1">2 kg</option>
                                                            <option value="2">3 kg</option>
                                                            <option value="3">4 kg</option>
                                                        </Form.Select>
                                                    </div> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Vegetables;