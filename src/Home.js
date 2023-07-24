import './Home.css';
import { Layout, Menu} from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Divider, Steps} from 'antd';

const { Content } = Layout;
const { Step } = Steps;
const Home = () => {

  return (
    <Layout>
      
        <Sider width={200} theme="dark" style={{  height: '155vh' }}>
          <Menu className='Menu' theme="dark" mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Contact</Menu.Item>
          </Menu>
        </Sider>
        <Content>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-30px', fontsize: '60px'}}>
          <h2 className='Profile_Picture'><UserOutlined /></h2>
          <h2 style={{marginTop: '-40px', fontSize: '18px' }}>Luke S. Maccariello</h2>
          <h2 style={{ fontSize: '18px'}}>12 Regal Road Manalapan, New Jersey 07726</h2>
        </div>

        <div className='Education' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <h3 style={{fontSize: '35px', marginTop: '5px' }}>Education</h3>
        <Divider style={{ borderColor: 'black', borderWidth: '3px', marginTop: '-30px'}} /> 
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop:'-30px' }}>
          <h2 style={{ fontSize: '15px' }}>University of Delaware Newark, DE</h2>
          <h2 style={{ fontSize: '15px'}}>Graduated: May 2022</h2>
      </div>
          <h2 style={{fontSize: '15px'}}>Computer Science Major Concentration in Artifical Intelligence and Robotics</h2>
          <h2 style={{fontSize: '15px'}}>College of Engineering</h2>       
        </div>
        <div className='Work_Experience' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop:'30px'}}>
        <h3 style={{fontSize: '35px', marginTop: '5px' }}>Work Experience</h3>
        <Divider style={{ borderColor: 'black', borderWidth: '3px', marginTop: '-30px'}} /> 
        
        <Steps direction="vertical" current={-1}>
            <Step   title="BioMedical Engineering and Imaging Institute, New York, NY"  
            description={
              <>
                <p>Machine Learning Engineer</p>          
                <ul>
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
            <Step   title="Proviniti, New York City, New York"
              description={
                <>
                  <p>Software Engineer</p>
                  <ul>
                    <li>Worked as a Front-End Developer to develop a website used for Employees to enter in their Timesheets</li>
                    <li>Used Figma to design projects for the best UI/UX experience which was levaraged to the Front-End software</li>
                    <li>Called Api service which would be utilized through buttons on the Front-End</li>
                    <li>Utilized Sql Server Management Studio to assist in creating a database management system</li>
                    <li>Wrote procedures and triggers in SQL Management Server Studio</li>
                    <li>Assisted in engineering a website through Scriptcase, a php rapid web development tool</li>
                  </ul>
                </>
              }
              status="process"/>
          </Steps>
          </div>
          <div className='Honors/Activites' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <h3 style={{fontSize: '35px', marginTop: '10px' }}>Honors/Activites</h3>
        <Divider style={{ borderColor: 'black', borderWidth: '3px', marginTop: '-30px'}} />
                    <h2 style={{ marginTop: '-10px' }}>Deans List</h2>
                <ul style={{ marginTop: '-10px' , fontSize:'15px'}}>
                    <li>Spring 2022</li>
                    <li>Fall 2021</li>
                    <li>Spring 2020</li>
                    <li>Fall 2020</li>
                </ul>
        </div>
        <div className='Skills' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop:'30px'}}>
        <h3 style={{fontSize: '35px', marginTop: '5px' }}>Skills</h3>
        <Divider style={{ borderColor: 'black', borderWidth: '3px', marginTop: '-30px'}} /> 
        <ul style={{ marginTop: '-10px', fontSize:'15px'}}>
                    <li>Advanced skills in Java, Python, C++, Lisp, PHP, Reactjs, Typescript</li>
                    <li>Advanced knowledge of OpenCV and PyTorch</li>
                    <li>Understanding of SQL and Database Administration</li>
                    <li>Designing layouts and developing styles of websties</li>
                </ul>
        </div>
          </Content> 
         
      </Layout>
  );
};

export default Home;
