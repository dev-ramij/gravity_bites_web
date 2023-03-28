import React from "react";
import { Tab, Container, Row, Col } from 'react-bootstrap';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';


const NewOrders = () => {
    return (
        <>
            <div className="order-container">
                <div className="order-list">
                    <Row>
                        <Col md={12} className='ps-0'>
                            <div className="order-table">
                            <div className="confirm-order mb-5">
                                    <Row style={{padding:"14px",backgroundColor:"var(--main-background)"}}>
                                     
                                        <div className="store">
                                            <p>Store Prepration time</p>
                                            <div className="set-quant">
                                                <button type="button" className="btn" style={{borderRadius:"10px 0px 0px 10px"}}>-</button>
                                                <input type="text" defaultValue="10 mins"/>
                                                <button type="button" className="btn" style={{borderRadius:"0px 10px 10px 0px"}}>+</button>
                                            </div>
                                        </div>
                                       <div className='delivery-boy'>
                                        <div className='delivery-box'>
                                            <div className='img'>
                                                <img src='images/boy.jpg'/>
                                            </div>
                                            <div className='name'>
                                                <h3>George Anderson</h3>
                                                <span>Delivery Partner Assigned</span>
                                            </div>
                                        </div>
                                    </div>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <button className="reject btn">
                                                Reject
                                            </button>
                                        </Col>
                                        <Col sm={6}>
                                            <button className="accept btn">
                                                Accept Order (0:50)
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="product-details">
                                <div className='order-name'>
                                            <h2>Samantha
                                            <span>OrderA000 | 22 june, 11:00am</span>
                                            </h2>
                                            
                                            <div className='call-to'>
                                                <MessageIcon sx={{ color: "#76d33a" }} />
                                                <CallIcon sx={{ color: "#76d33a" }} />
                                            </div>
                                        </div>
                                    <h3>ITEM(s)</h3>
                                    <div className="detail-box">
                                        <div className="inner-table">
                                            <p className="w-30"><RadioButtonCheckedIcon sx={{ fontSize: 18 ,color:"#76d33a"}} />Veg Sandwich</p>
                                            <p>1</p>
                                            <span>$50</span>
                                        </div>
                                        <div className="inner-table extra">
                                            <p className="w-30">Extra Cheese</p>
                                            <span>$30</span>
                                        </div>
                                    </div>
                                    <div className="detail-box">
                                        <div className="inner-table">
                                            <p className="w-30"><RadioButtonCheckedIcon sx={{ fontSize: 18 ,color:"red"}}/>Fried Chicken</p>
                                            <p>1</p>
                                            <span>$5</span>
                                        </div>  
                                    </div>
                                    <div className="detail-box">
                                        <div className="inner-table">
                                            <p className="w-30"><RadioButtonCheckedIcon sx={{ fontSize: 18 ,color:"#76d33a"}}/>Watermelon Juice</p>
                                            <p>1</p>
                                            <span>$5</span>
                                        </div>  
                                    </div>
                                </div>
                                <div className="product-details mt-3 payment-info">
                                    <h3>Payment Info</h3>
                                    <div className="detail-box">
                                        <div className="inner-table">
                                            <p className="w-30"> SubTotal</p>
                                            <span>$50</span>
                                        </div>
                                        </div>
                                        <div className="detail-box">
                                        <div className="inner-table">
                                            <p className="w-30">Tax</p>
                                            <span>$50</span>
                                        </div>
                                        </div>
                                        <div className="detail-box">
                                        <div className="inner-table">
                                            <p className="w-30">Discount</p>
                                            <span>5%</span>
                                        </div>
                                        </div>
                                        <div className="detail-box">
                                        <div className="inner-table">
                                            <p className="w-30">Cash on Delivery</p>
                                            <span>$50</span>
                                        </div>
                                </div>
                                </div>
                              
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default NewOrders