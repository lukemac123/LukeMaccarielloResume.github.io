import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import TextArea from "antd/es/input/TextArea";
import Input from  "antd/es/input";
import { Button } from "antd";
const { Sider, Content } = Layout;

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();
  const nav = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = 'lukemac@udel.edu';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      
    <Sider width={200} theme="dark" style={{  height: '175vh' }}>
      <Menu className='Menu' theme="dark" mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="2" onClick={nav} >Home</Menu.Item>
          <Menu.Item key="1"> 
          Contact Me
          </Menu.Item>
      </Menu>
    </Sider>
      <Layout>
        <Content style={{ padding: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '400px' }}>
              <h3 style={{ fontSize: '35px', marginBottom: '20px',  marginLeft: '90px' }}>Contact Me</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                
                  <Input
                    type="text"
                    placeholder='Subject'
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    style={{ width: 200, fontSize: '16px', padding: '5px', marginLeft: '90px' }}
                    
                  />
                </div>
                <div>
                  
                  <TextArea
                   placeholder='Body'
                   maxLength={4000}
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                     autoSize={{ minRows: 10, maxRows: 20 }}
                    style={{ fontSize: '16px', padding: '5px'}}
                  />
                </div>
                <Button onClick={handleSubmit} type="submit" style={{ marginTop: '10px', fontSize: '16px', backgroundColor: 'lightgrey'}}>
                  Send Email
                </Button>
              </form>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Contact;
