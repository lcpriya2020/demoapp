import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout

function AppSider() {   
    return(
    <Sider style={{ background:'#fff' }}> 
        <Router>              
        <Menu>
        <Menu.Item key='usermanagement'>
            <Link to="/usermanagement">User Management</Link>            
        </Menu.Item>
        <Menu.Item key='subscription'>
            <Link to="/subscription">Subscription Plans</Link>
        </Menu.Item>
        <Menu.Item key='requirements'>
            <Link to="/requirements">Requirements</Link>
        </Menu.Item>
        <Menu.Item key='meetings'>
            <Link to="/meetings">Meetings</Link>    
        </Menu.Item>
        <Menu.Item key='payments'>
            <Link to="/payments">Payments</Link>    
        </Menu.Item>
        <Menu.Item key='milestones'>
            <Link to="/milestones">Milestones</Link>    
        </Menu.Item>
        <Menu.Item key='icubeexclusives'>
            <Link to="/icubeexclusives">ICubeExclusives</Link>
        </Menu.Item>
        <Menu.Item key='hrreadycube'>
            <Link to="/hrreadycube">HRReadyCube</Link>
        </Menu.Item>
        <Menu.Item key='logout'>
            <Link to="/logout">Logout</Link>
        </Menu.Item>
        </Menu>           
        </Router>       
    </Sider>
    );
}

export default AppSider;