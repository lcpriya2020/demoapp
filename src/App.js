import React from 'react';
import './App.css';
import AppHome from './components/common/appHome';
// import { Layout } from 'antd';
// import AppHeader from './components/common/header';
// import AppSider from './components/common/sider';
// import AppContent from './components/common/content';

function App() {
  return (
   <div className="App">    
   <AppHome />
    {/* <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <Layout>
        <AppContent />
        </Layout>        
      </Layout>
    </Layout> */}
  </div>
  );
}

export default App;
