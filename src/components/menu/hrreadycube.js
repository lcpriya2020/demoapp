import React, { useState, useEffect } from 'react';
import '../../App.css';
import {  Form, Input, Row, Col, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import AddPolicy from './addpolicy';

const items = [
    {
        id: '1',
        policy: 'Leave Policy',
        price: '$35',
        date: '16-09-2019 05:09:00',
        status: 'Active',
        Actions: 'List'
    },
    {
        id: '2',
        policy: 'Discipline Policy',
        price: '$35',
        date: '16-09-2019 05:09:00',
        status: 'Active',
        Actions: 'List'
    },
    {
        id: '3',
        policy: 'Prevention of Sexual Harrassment Policy',
        price: '$35',
        date: '16-09-2019 05:09:00',
        status: 'Active',
        Actions: 'List'
    },
    {
        id: '4',
        policy: 'Code of Conduct Policy',
        price: '$35',
        date: '16-09-2019 05:09:00',
        status: 'Active',
        Actions: 'List'
    },
    {
        id: '5',
        policy: 'Health and Wellness Policy',
        price: '$35',
        date: '16-09-2019 05:09:00',
        status: 'Active',
        Actions: 'List'
    },
    {
        id: '6',
        policy: 'Onboarding Policy',
        price: '$35',
        date: '16-09-2019 05:09:00',
        status: 'Active',
        Actions: 'List'
    },
    {
        id: '7',
        policy: 'Grievance Policy',
        price: '$35',
        date: '16-09-2019 05:09:00',
        status: 'Active',
        Actions: 'List'
    },
    {
        id: '8',
        policy: 'Learning and Development Policy',
        price: '$35',
        date: '16-09-2019 05:09:00',
        status: 'Active',
        Actions: 'List'
    }
]

const size = {
   wrapperCol: { span: 24 },
  };

function Hrreadycube() {    

    
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        console.log('intialize');
      }, []);

    const clickAddPolicy = () => {   
        setButtonClicked(true)
         }

        // console.log('clicked', buttonClicked); 

    return(
        
        buttonClicked? <AddPolicy /> : 

        <div id="hrreadycube" className="App">
            HR ReadyCube
            <div className="App-List">
            <div>
            <Form layout="inline" {...size} >
            <Form.Item>
                <Input placeholder=" Search for the documents you are looking for here " />
            </Form.Item><Form.Item>
                <Button type="primary" onClick={clickAddPolicy} htmlType="button">Add Policy/Template</Button>
            </Form.Item> 
            </Form>
            </div>

          <Row gutter={[8,8]}>
          <Col span={4}><Title level={5}>Policy/Template Name</Title></Col>
          <Col span={4}><Title level={5}>Price</Title></Col>
          <Col span={4}><Title level={5}>Created Date</Title></Col>
          <Col span={4}><Title level={5}>Status</Title></Col>  
          <Col span={4}><Title level={5}>Actions</Title></Col>
          <Col span={4}></Col>         
          </Row>         
          { items.map((item) => {
              return(   
                <Row gutter={[8,8]}>             
                <Col span={4} key={item.id}>{item.policy}</Col> 
                <Col span={4} key={item.id}>{item.price}</Col> 
                <Col span={4} key={item.id}>{item.date}</Col>
                <Col span={4} key={item.id}>{item.status}</Col>
                <Col span={4} key={item.id}>{item.Actions}</Col>
                <Col span={4} key={item.id}></Col>               
                </Row>              
              );
            })
          }
          </div>                
        </div>
    );
}

export default Hrreadycube;