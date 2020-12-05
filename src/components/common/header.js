import React from 'react';
import { Layout, Avatar, Image } from 'antd';
import imgBell from '../../assets/images/bell.png';
import imgLogo from '../../assets/images/solvecube.png';

const { Header } = Layout

function AppHeader() {
    return(
    <Header style={{background: 'white'}}>
      <Avatar style={{float: 'right'}} src={ imgBell } />
      <Image width={120} height={30} src={ imgLogo } />   
    </Header>
    );
}

export default AppHeader;