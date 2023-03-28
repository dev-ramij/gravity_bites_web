import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { ROUTES } from '../../routes/RouterConfig'

import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import UploadButton from '../../components/Button/UploadButton';

/**
 * 
 * @param {{onClickNext:()=>void,onClickBack:()=>void}} props 
 * @returns 
 */
const StoreDetails = (props) => {

  const { onClickNext, onClickBack } = props;

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='Login'>
      <Header2
        idx={0}
        onClickBack={onClickBack}
      />

      <div className='py-16'>
        <div className='lg:w-8/12 md:w-8/12 sm:w-8/12 w-full m-auto mt-12'>
          <h2 className='font-semibold text-4xl my-8 text-center pb-12'>Store Address</h2>
          <Form>
            <Container fluid="sm">
              <Row>

                <Col sm='12'>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Store Name</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter Store Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter Your Store Address" />
                  </Form.Group>
                </Col>


              </Row>
              <Row>
                <Col sm='4'>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Latitude</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="number" placeholder="Latitude" />
                  </Form.Group>
                </Col>
                <Col sm='4'>

                </Col>
                <Col sm='4'>

                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Longitude</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="number" placeholder="Longitude" />
                  </Form.Group>
                </Col>

              </Row>
              <Row>
                <Col sm='6'>

                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Store Address (Locality)</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter Street Number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Store Address (State)</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter State" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Store Address (Country Code)</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter Country Code" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Add which category would you deliver</Form.Label>
                    <Form.Select aria-label="Select" className='rounded-md h-10 mb-8'>
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Who Manage Store</Form.Label>
                    <Form.Select aria-label="Name" className='rounded-md h-10 mb-8'>
                      <option>Name</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm='6'>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Store Address (City)</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter City" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Store Address (PIN Code)</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter PIN Code" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Upload Store Image</Form.Label>
                    {/* Custom button for uploading file  */}
                    <UploadButton
                      text='Upload Store Image'
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Services</Form.Label>
                    <Form.Select aria-label="Select" className='rounded-md h-10 mb-8'>
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Opening Time</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="time" placeholder="Enter City" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Closing Time</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="time" placeholder="Enter City" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <div>
                  <h2 className='font-semibold text-xl mb-2'>Mark Open Days</h2>
                  <h2 className='font-medium text-sm pb-4'>Don't forget to uncheck your off-day</h2>
                </div>

                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="c1">
                    <Form.Check type="checkbox" label="Monday" />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="c2">
                    <Form.Check type="checkbox" label="Tuesday" />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="c3">
                    <Form.Check type="checkbox" label="Wednesday" />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="c4">
                    <Form.Check type="checkbox" label="Thursday" />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="c5">
                    <Form.Check type="checkbox" label="Friday" />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="c6">
                    <Form.Check type="checkbox" label="Saturday" />
                  </Form.Group>
                </Col>
                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="c7">
                    <Form.Check type="checkbox" label="Sunday" />
                  </Form.Group>
                </Col>

              </Row>
              <div className='text-center'>
                <Button
                  onClick={onClickNext}
                  className='bg-[#0d6efd] rounded-full w-32 mt-12' variant="primary">Next</Button>
              </div>
            </Container>
          </Form>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default StoreDetails