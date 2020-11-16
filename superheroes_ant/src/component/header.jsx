import React from 'react';
import { Link } from 'react-router-dom';
import { Layout,Input,Menu } from 'antd';
import 'antd/dist/antd.css';


const { Header, Content, Footer, Sider} = Layout;
const Headerr =()=>{
    return(
    <Layout className="Layout">
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      {/* <Menu.Item key="1" icon={<UserOutlined />}> */}
        <Menu.Item key="1">
       Superhero Search
        </Menu.Item>
              
      </Menu>
    </Sider>
    <Layout >
    </Layout>
  </Layout>
  
    
    );
}
export default Headerr;