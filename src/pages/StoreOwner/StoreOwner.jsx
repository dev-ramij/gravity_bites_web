import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { ROUTES } from '../../routes/RouterConfig'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'

/**
 * 
 * @param {{onClickNext:()=>void,onClickBack:()=>void}} props 
 * @returns 
 */
const StoreOwner = (props) => {

    const { onClickNext, onClickBack } = props;

    const navigate = useNavigate()

    const changeDir = (dir) => {
        navigate(dir)
    }

    return (
        <div className='Login'>
            <Header2
                idx={1}
                onClickBack={onClickBack}
            />
            <div className='py-16'>
                <div className='lg:w-8/12 md:w-8/12 sm:w-8/12 w-full m-auto mt-12'>
                    <h2 className='font-semibold text-4xl my-8 text-center pb-12'>Store Owner Details</h2>
                    <Form>
                        <Container fluid="sm">
                            <Row>
                                <Col sm='12'>
                                    <Form.Group className="mb-2">
                                        <Form.Label className='font-semibold'>Store Owner Name</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-4' type="text" placeholder="Enter Your Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label className='font-semibold'>Store Owner Email Id</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-4' type="email" placeholder="Enter Your Email ID" />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label className='font-semibold'>Password</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-4' type="password" placeholder="Enter Your Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label className='font-semibold'>Comfirm Password</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-4' type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label className='font-semibold'>Mobile Number with OTP Verification</Form.Label>
                                        <div className='flex'>
                                            <Form.Control className='rounded-md h-10 mr-3' type="password" placeholder="Enter Your Number" />
                                            <Button className='w-32' variant="light">Verify</Button>
                                        </div>
                                    </Form.Group>
                                    <div className='text-center'>
                                        <Button
                                            onClick={onClickNext}
                                            className='bg-[#0d6efd] rounded-full w-32 mt-12' variant="primary">Next</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Form>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StoreOwner