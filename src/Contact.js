import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();
  const nav =() => {
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
    <div>
        <Layout>
        <Sider width={200} theme="dark" style={{  height: '175vh' }}>
          <Menu className='Menu' theme="dark" mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="2" onClick={nav} >Home</Menu.Item>
              <Menu.Item key="1"> 
              Contact Me
              </Menu.Item>
          </Menu>
        </Sider>
        <div>
      <h3 style={{ fontSize: '35px', marginTop: '5px' }}>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
      </div>
      </Layout>
    </div>
  );
};

export default Contact;
