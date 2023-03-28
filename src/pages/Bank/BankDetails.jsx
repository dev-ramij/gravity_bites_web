import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Container, Table } from 'react-bootstrap';
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import UploadButton from '../../components/Button/UploadButton';

/**
 * 
 * @param {{onClickNext:()=>void,onClickBack:()=>void}} props 
 * @returns 
 */
const BankDetails = (props) => {

    const { onClickNext, onClickBack } = props;

    const navigate = useNavigate()

    const changeDir = (dir) => {
        navigate(dir)
    }

    return (
        <div className='Login'>
            <Header2
                idx={3}
                onClickBack={onClickBack} 
                />
            <div className='py-16'>
                <div className='lg:w-8/12 md:w-8/12 sm:w-8/12 w-full m-auto mt-12'>
                    <h2 className='font-semibold text-4xl my-8 text-center pb-12'>Bank details & Terms & Condition</h2>
                    <Form>
                        <Container fluid="sm">
                            <Row>
                                <Col sm='6'>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='font-semibold'>Bank Name</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter Your Bank Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='font-semibold'>Account Number</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-8' type="number" placeholder="Enter Your Account Number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='font-semibold'>IFSC Code</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter IFSC Code" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='font-semibold'>UPI ID (Optional)</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter UPI ID" />
                                    </Form.Group>
                                </Col>
                                <Col sm='6'>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='font-semibold'>Account Holder Name</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder='Enter Your Name' />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='font-semibold'>Comfirm Account Number</Form.Label>
                                        <Form.Control className='rounded-md h-10 mb-8' type="number" placeholder="Enter Your Account Number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className='font-semibold'>Upload (Passbook or Cancel Cheque)</Form.Label>
                                        {/* <Form.Control className='rounded-md h-10 mb-8' type="file" /> */}
                                        <UploadButton />
                                    </Form.Group>
                                </Col>

                            </Row>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Terms & Conditions" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                <Form.Check type="checkbox" label="Privacy Policy" />
                            </Form.Group>
                        </Container>
                    </Form>
                    <h2 className='font-semibold text-2xl mt-8 text-center pb-4'>Commision & Charges per Order</h2>
                    <h2 className='font-semibold text-xl mt-0 text-center pb-4'>Revised Payment Charge</h2>
                    <Container>
                        <div>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Payment</th>
                                        <th className="text-center">Revised MDR</th>
                                        <th>Monthly Acceptance Limit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Food & Beverages</td>
                                        <td className="text-center">20%</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td>Vegetables & Grocery</td>
                                        <td className="text-center">10%</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td>Meat & Fish</td>
                                        <td className="text-center">30%</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td>Medicine</td>
                                        <td className="text-center">12%</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td>Pet Supplies</td>
                                        <td className="text-center">11%</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td>Payment Mechanism Fee</td>
                                        <td className="text-center">15%</td>
                                        <td>Tax On Order Value</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Container>
                    <div className='text-center'>
                        <Button
                            onClick={onClickNext}
                            className='bg-[#0d6efd] rounded-full w-32 mt-12' variant="primary">Submit</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BankDetails