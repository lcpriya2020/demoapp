import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout

function NewSider(props) {  

    const {handleClick} = props;

    return(
    <Sider style={{ background:'#fff' }}>             
        <Menu>
        <Menu.Item key='1' onClick={handleClick}>User Management         
        </Menu.Item>
        <Menu.Item key='2' onClick={handleClick}>Subscription Plans
        </Menu.Item>
        <Menu.Item key='3' onClick={handleClick}>Requirements
        </Menu.Item>
        <Menu.Item key='4' onClick={handleClick}>Meetings 
        </Menu.Item>
        <Menu.Item key='5' onClick={handleClick}>Payments   
        </Menu.Item>
        <Menu.Item key='6' onClick={handleClick}>Milestones  
        </Menu.Item>
        <Menu.Item key='7' onClick={handleClick}>ICubeExclusives
        </Menu.Item>
        <Menu.Item key='8' onClick={handleClick}>HRReadyCube
        </Menu.Item>
        <Menu.Item key='9' onClick={handleClick}>Logout
        </Menu.Item>
        </Menu>      
    </Sider>
    );
}

export default NewSider;