import './Home.css';
import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Divider, Steps } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Step } = Steps;

const Home = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/contact');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="dark" style={{ position: 'fixed', height: '100vh' }}>
        <Menu className="Menu" theme="dark" mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2" onClick={nav}>
            Contact Me
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200, background: '#fff' }}>
        <Content style={{ padding: '20px', overflowY: 'scroll', height: '100vh' }}>
          <div className="Profile" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 className="Profile_Picture">
              <UserOutlined />
            </h2>
            <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>Luke S. Maccariello</h2>
            <h2 style={{ fontSize: '18px' }}>lukemac1111@gmail.com • (732-713-7575)</h2>
            <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>12 Regal Road • Manalapan, New Jersey 07726</h2>
          </div>

          <div className="Education">
            <h3 style={{ fontSize: '35px', marginTop: '5px', marginBottom: '10px' }}>Education</h3>
            <Divider style={{ borderColor: 'black', borderWidth: '3px', marginBottom: '20px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>University of Delaware</p>
              <p style={{ fontSize: '18px', marginRight: '830px' }}>Newark, DE</p>
              <p style={{ fontSize: '18px' }}>Graduated: May 2022</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Computer Science Major</p>
              <p style={{ fontSize: '18px', marginRight: '750px' }}>Concentration in Artificial Intelligence and Robotics</p>
            </div>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>College of Engineering</p>
          </div>

          <div className="Work_Experience">
            <h3 style={{ fontSize: '35px', marginTop: '5px', marginBottom: '10px' }}>Work Experience</h3>
            <Divider style={{ borderColor: 'black', borderWidth: '3px', marginBottom: '20px' }} />
            <Steps direction="vertical" current={-1}>
              <Step
                title="BioMedical Engineering and Imaging Institute, New York, NY"
                description={
                  <>
                    <p style={{ fontSize: '18px' }}>Machine Learning Engineer</p>
                    <ul style={{ fontSize: '18px' }}>
                      <li>Worked with Valentin Fauveau on learning AI and Machine Learning concepts.</li>
                      <li>Spent the summer working on a Kaggle project for detecting COVID-19 in X-rays.</li>
                      <li>Developed knowledge on how to effectively train a model.</li>
                      <li>Gave weekly updates on the progress of my work with the BMEII team.</li>
                      <li>Attended and took notes on the weekly base touch meeting lead by the Director of BMEII.</li>
                    </ul>
                  </>
                }
                status="process"
              />
              <Step
                title="Proviniti, New York City, New York"
                description={
                  <>
                    <p style={{ fontSize: '18px' }}>Software Engineer</p>
                    <ul style={{ fontSize: '18px' }}>
                      <li>Worked as a Front-End Developer to develop a website used for Employees to enter in their Timesheets</li>
                      <li>Used Figma to design projects for the best UI/UX experience which was leveraged to the Front-End software</li>
                      <li>Called API service which would be utilized through buttons on the Front-End</li>
                      <li>Utilized SQL Server Management Studio to assist in creating a database management system</li>
                      <li>Wrote procedures and triggers in SQL Management Server Studio</li>
                      <li>Assisted in engineering a website through Scriptcase, a PHP rapid web development tool</li>
                    </ul>
                  </>
                }
                status="process"
              />
            </Steps>
          </div>

          <div className="Honors/Activites">
            <h3 style={{ fontSize: '35px', marginTop: '10px', marginBottom: '10px' }}>Honors/Activities</h3>
            <Divider style={{ borderColor: 'black', borderWidth: '3px', marginBottom: '20px' }} />
            <h2 style={{ marginTop: '-10px', fontSize: '18px', marginBottom: '5px' }}>Deans List</h2>
            <ul style={{ marginTop: '-10px', fontSize: '18px' }}>
              <li>Spring 2022</li>
              <li>Fall 2021</li>
              <li>Spring 2020</li>
              <li>Fall 2020</li>
            </ul>
          </div>

          <div className="Skills">
            <h3 style={{ fontSize: '35px', marginTop: '5px', marginBottom: '10px' }}>Skills</h3>
            <Divider style={{ borderColor: 'black', borderWidth: '3px', marginBottom: '20px' }} />
            <ul style={{ marginTop: '-10px', fontSize: '18px' }}>
              <li>Advanced skills in Java, Python, C++, Lisp, PHP, Reactjs, Typescript</li>
              <li>Advanced knowledge of OpenCV and PyTorch</li>
              <li>Understanding of SQL and Database Administration</li>
              <li>Designing layouts and developing styles of websites</li>
            </ul>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
