import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import { Layout,Input,Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined,Icon } from '@ant-design/icons';


const { Search } = Input;
const { Header, Content, Footer, Sider} = Layout;

const onSearch = value => console.log(value);

ReactDOM.render(
  <>
    <>
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
      <Header className="site-layout-sub-header-background" />
  <div className='main-image'>
      <Content style={{ margin: '24px 16px 0' }}>
        
          <Search
      placeholder="Search"
      allowClear
      onSearch={onSearch}
      className="search-superhero"
    />
       
      </Content>
      </div>
      <br />  
      <Footer style={{ textAlign: 'center' }}>Superhero App</Footer>
    </Layout>
  </Layout>,
  </>,
    
    <br />
    
  </>,
  document.getElementById('root')
);


reportWebVitals();
