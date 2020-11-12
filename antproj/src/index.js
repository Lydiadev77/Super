import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import { Layout,Input } from 'antd';

const { Search } = Input;
const { Header, Footer } = Layout;

const onSearch = value => console.log(value);

ReactDOM.render(
  <>
    <>
    <Layout className="layout">
    <Header>
      <h4
       className="title"
       style={{ color: 'white'}}>Superhero Search</h4>
    </Header>
    <br></br>
    <Image
        width='auto'
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
  
      />
    <Search
      placeholder="Search Superhero"
      allowClear
      onSearch={onSearch}
      style={{ width: 'auto', margin: '0 10px', paddingLeft: '100px'}} 
    />
    {/* <Footer style={{ textAlign: 'center' }}>Search App Footer</Footer> */}
  </Layout>,
  </>,
    
    <br />
    
  </>,
  document.getElementById('root')
);


reportWebVitals();
