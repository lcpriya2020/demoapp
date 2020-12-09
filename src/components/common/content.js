import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../App.css';
import { Layout } from 'antd';
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
        <Content style={{ background:'#fff', padding: '0 20px' }} className="App">                
            <Router>        
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
            </Router>
        </Content>       
    );
}

export default AppContent;