import './Home.css';
import { Layout, Menu} from 'antd';
import React, { useContext, useState, useEffect } from 'react';

const Home = () => {

  return(
    <Layout>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Contact</Menu.Item>
        </Menu>
      </Layout>
    );
};

export default Home;
