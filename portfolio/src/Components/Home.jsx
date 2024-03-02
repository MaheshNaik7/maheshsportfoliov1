import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import RESUME from '../Components/Maheshs Resume.pdf';
import Bground from '../Components/images/bg1.jpg';
import Soft from '../Components/images/softmusk.jfif';
import KodNst from '../Components/images/KodNest.png';
import Udmy from '../Components/images/udemy.png';
// import Develpr from '../Components/images/developer.png';
import Carousel from './Carousel';
//import FileUploader from './Fileuploader';

function App() {
  return (
    <div>
      <NavBar/>
      <main>
        <section className="firstSection">
          <div className="leftSection">
            Hi, My Name is <span className="purple">Mahesh</span>
            <div>and I am passionate</div>
            {/* <div>Java Developer</div> */}
            {/* Element to contain animated typing */}
            <span id="element">Web Developer, Java Developer.</span>
            <span className='typed-curoser typed-courser--blink' aria-hidden="true"></span>
            <div>
            <button className="btn">
              <a href={RESUME} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </button>
            </div>
          </div>
          <div className="rightSection">
            <img src={Bground} alt="" />
          </div>
        </section>
        <hr />
        <section className="secondSection">
          <span className="text-gray">What I have done so far</span>
          <h1>Internship/Courses</h1>
          <div className="box">
            <div className="vertical">
              <Link to="https://www.softmusk.com/">
                <img className="image-top" src={Soft} alt="softmusk.com" />
              </Link>
              <div className="vertical-title">
                Python Internship - SoftMusk Info Private Limited, Belagavi(11/2022-12/2022)
              </div>
              <div className="vertical-desc">
                A Internship Project based on Securing IOT data using Blockchain.
                Blockchain has emerged as the possible solution for creating more secure IoT systems.
                Technologies were–(Python, Django, MySQL, Wamp Server 2.4)
              </div>
            </div>
            <div className="vertical">
              <Link to="https://www.kodnest.com/">
                <img className="image-top" src={KodNst} alt="KodNest.com" />
              </Link>
              <div className="vertical-title">
                Software Development Intern - KodNest Technologies, Bangalore(06/2023-Present)
              </div>
              <div className="vertical-desc">
                Intern at KodNest, where I acquired practical skills in Java, MySQL,
                Frontend and Backend Technology, Manual Testing, contributing to real-world projects and
                learning directly from industry professionals.
              </div>
            </div>
            <div className="vertical">
              <Link to="https://www.Udemy.com/">
                <img className="image-top" src={Udmy} alt="Udemy.com" />
              </Link>
              <div className="vertical-title">
                [NEW] Master Spring Boot 3 & Spring Framework 6 with Java
              </div>
              <div className="vertical-desc">
                This is The Course you need to learn everything you need to know about
                building real world Java applications
                and deploying them to the cloud using Spring and Spring Boot Frameworks.
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="ThirdSection">
          <h1>Certificates</h1>
          <div>
          <Carousel/>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
