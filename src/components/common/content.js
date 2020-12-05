import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../App.css';
import { Layout, Row, Col, Button } from 'antd';
import Usermanagement from '../menu/usermanagement';
import Subscription from '../menu/subscription';
import Requirements from '../menu/requirements';
import Meetings from '../menu/meetings';
import Payments from '../menu/payments';
import Milestones from '../menu/milestones';
import Icubeexclusives from '../menu/icubeexclusives';
import Hrreadycube from '../menu/hrreadycube';
import Logout from '../menu/logout';

const { Content } = Layout

function AppContent() {    
    return(
        <Content style={{ background:'#fff', padding: '0 20px' }}>  
        <div className="App">               

        <BrowserRouter>
        <Switch>
            <Route path ="/" exact component ={Usermanagement} />
            <Route path ="/usermanagement" component ={Usermanagement} />
            <Route path ="/subscription" component ={Subscription} />
            <Route path ="/requirements" component ={Requirements} />
            <Route path ="/meetings" component ={Meetings} />
            <Route path ="/payments" component ={Payments} />
            <Route path ="/milestones" component ={Milestones} />
            <Route path ="/icubeexclusives" component ={Icubeexclusives} />
            <Route path ="/Hrreadycube" component ={Hrreadycube} />  
            <Route path ="/logout" component ={Logout} />          
        </Switch>
        </BrowserRouter>

            {/* <Usermanagement />
            <Hrreadycube /> */}

          {/* <Button type= 'primary'> Add Policy/Template</Button> 

          <Row gutter={[8,8]}>
          <Col span={4}><Title level={5}>Policy/Template Name</Title></Col>
          <Col span={4}><Title level={5}>Price</Title></Col>
          <Col span={4}><Title level={5}>Created Date</Title></Col>
          <Col span={4}><Title level={5}>Status</Title></Col>  
          <Col span={4}><Title level={5}>Actions</Title></Col>
          <Col span={4}></Col>         
          </Row>
          <Row gutter={[8,8]}>
          <Col span={4}>Leave Policy</Col>
          <Col span={4}>$35</Col>
          <Col span={4}>16-09-2019  
          05:09:00</Col>
          <Col span={4}>Active</Col>  
          <Col span={4}>List</Col>
          <Col span={4}></Col>
          </Row>
          <Row gutter={[8,8]}>
          <Col span={4}>Discipline Policy</Col>
          <Col span={4}>$35</Col>
          <Col span={4}>16-09-2019  
          05:09:00</Col>
          <Col span={4}>Active</Col>  
          <Col span={4}>List</Col>
          <Col span={4}></Col>
          </Row>
          <Row gutter={[8,8]}>
          <Col span={4}>Prevention of Sexual Harrassment Policy</Col>
          <Col span={4}>$35</Col>
          <Col span={4}>16-09-2019  
          05:09:00</Col>
          <Col span={4}>Active</Col>  
          <Col span={4}>List</Col>
          <Col span={4}></Col>
          </Row>
          <Row gutter={[8,8]}>
          <Col span={4}>Code of Conduct Policy</Col>
          <Col span={4}>$35</Col>
          <Col span={4}>16-09-2019  
          05:09:00</Col>
          <Col span={4}>Active</Col>  
          <Col span={4}>List</Col>
          <Col span={4}></Col>
          </Row>
          <Row gutter={[8,8]}>
          <Col span={4}>Health and Wellness Policy</Col>
          <Col span={4}>$35</Col>
          <Col span={4}>16-09-2019  
          05:09:00</Col>
          <Col span={4}>Active</Col>  
          <Col span={4}>List</Col>
          <Col span={4}></Col>
          </Row>
          <Row gutter={[8,8]}>
          <Col span={4}>Onboarding Policy</Col>
          <Col span={4}>$35</Col>
          <Col span={4}>16-09-2019  
          05:09:00</Col>
          <Col span={4}>Active</Col>  
          <Col span={4}>List</Col>
          <Col span={4}></Col>
          </Row>
          <Row gutter={[8,8]}>
          <Col span={4}>Grievance Policy</Col>
          <Col span={4}>$35</Col>
          <Col span={4}>16-09-2019  
          05:09:00</Col>
          <Col span={4}>Active</Col>  
          <Col span={4}>List</Col>
          <Col span={4}></Col>
          </Row>
          <Row gutter={[8,8]}>
          <Col span={4}>Learning and Development Policy</Col>
          <Col span={4}>$35</Col>
          <Col span={4}>16-09-2019  
          05:09:00</Col>
          <Col span={4}>Active</Col>  
          <Col span={4}>List</Col>
          <Col span={4}></Col>
          </Row>  */}
        </div>
        </Content>       
    );
}

export default AppContent;