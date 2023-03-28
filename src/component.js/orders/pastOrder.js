import React from "react";
import { Tab, Container, Row ,Col} from 'react-bootstrap';
const topicList = [
    {
      name: 'Linda Smith',
      order:'989757',
      price:"$30",
      deliver:"Cash on Delivery",
      date:"June 20 ,11,11:35am",
      status:"pending"
    },
    {
        name: 'Emili Williamson',
        order:'111256',
        price:"$40",
        deliver:"Cash on Delivery",
        date:"January 30 ,13:35am",
        status:"pending"
      },   {
        name: 'Linda Taylor',
        order:'3223232',
        price:"$50",
        deliver:"Cash on Delivery",
        date:"June 20 ,11,11:35am",
        status:""
      },   {
        name: 'Rohan dev',
        order:'11111',
        price:"$28",
        deliver:"Cash on Delivery",
        date:"June 20 ,11,11:35am",
        status:""
      },   {
        name: 'Samantha Smith',
        order:'222145',
        price:"$20",
        deliver:"Cash on Delivery",
        date:"June 20 ,11,11:35am",
        status:"pending"
      },   {
        name: 'Samantha Smith',
        order:'222145',
        price:"$20",
        deliver:"Cash on Delivery",
        date:"June 20 ,11,11:35am",
        status:""
      },
  ];
const PastOrders = () => {
    return (
        <>
            <div className="order-container">
                <div className="order-list">
                    <Row>
                        {/* <Col md={12} className='ps-0'>
                            <div className="order-table">
                            {topicList.map(topic =>
                                <div className="order-item">
                                    <Row>
                                        <Col md={2}>
                                            <div className="food-img">
                                                <img src="images/icon/food-and-drink.png" />
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className=" tableSection">
                                                <h2> {topic.name}</h2>
                                                <p>{topic.order}</p>
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
                                                <span>{topic.date}</span>
                                                {topic.status=='pending' ?
                                                <span className="warning">Pending</span>
                                                :
                                                <span className="succsess">Accepted</span>
                            }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                )}
                            </div>
                        </Col> */}
                        
                    </Row>
                </div>
            </div>
        </>
    )
}
export default PastOrders