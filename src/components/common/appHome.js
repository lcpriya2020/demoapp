import React, { useState } from 'react';
import '../../App.css';
import { Layout } from 'antd';
import AppHeader from './header';
import NewSider from './newSider';
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

function AppHome() {

  const menuList = {
    1: <Usermanagement />,
    2: <Subscription />,
    3: <Requirements />,
    4: <Meetings />,
    5: <Payments />,
    6: <Milestones />,
    7: <Icubeexclusives />,
    8: <Hrreadycube />,
    9: <Logout />
  };

  const [ menuClicked, setMenuClicked ] = useState(1);

  const handleMenuClick = (menu) => {
     setMenuClicked(menu.key);
     console.log(menu.key);
  };

    return (
     <div className="App">    
      <Layout>
        <AppHeader />
        <Layout>
          <NewSider handleClick={handleMenuClick} />
          <Layout>
           <Content className="App-content">{menuList[menuClicked]}</Content>
          </Layout>              
        </Layout>
      </Layout>
    </div>
    );
  }
export default AppHome;