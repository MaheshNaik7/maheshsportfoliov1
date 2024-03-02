import React from 'react';
import '../App.css'; // Import your CSS file
import { Link } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import ProfessionalSkills from './ProfessionalSkills';
import images from '../Components/images/Mahesh Naik.jpg';
import HTML from '../Components/images/html.jpg';
import CSS from '../Components/images/css.jpg';
import JSCRIPT from '../Components/images/jscript.png';
import BSTRAP from '../Components/images/boot.png';
import REACTJS from '../Components/images/rjs.png';
import JAVA from '../Components/images/java.png';
import JDBC from '../Components/images/jdbc.png';
import HIBERNATE from '../Components/images/hibernate.jpg';
import SPRINGBOOT from '../Components/images/spring.png';
import MYSQL from '../Components/images/mysql.jpg';
import MONGO from '../Components/images/mongo.png';



function About() {
  return (
    <div>
      <NavBar/>
      <div className="main">
        <div className="intro-about">
          <h2>About me</h2>
          <div className="intro">
            <br />
            <img className="profile_img" src={images} width="30%" alt="Mahesh Naik" />
            <br />
            <strong className="profile_name">MAHESH NAIK</strong>
            <br />
            <br />
            <div className="icons">
              <Link to="http://www.nukri.com" className="nukri_icon">Nukri.com</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="http://www.linkedin.com/in/mahesh-naik-4707b31aa/" className="in_icon"><i className="fa fa-linkedin" aria-hidden="true"></i>Linkedin</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="https://github.com/MaheshNaik7" className="git_icon"><i className="fa fa-github " aria-hidden="true"></i>GitHub</Link>
            </div> 
            
            <br />
            <p>
              I am an MCA graduate currently undergoing a comprehensive Java Full
              Stack Development program at Kodnest Technologies Pvt Ltd.
              I am actively exploring job opportunities to apply my expertise in the field.
            </p>
            <h2>My Skills</h2>
          </div>

          <div className="skills">
            <div><img className="image" src={HTML} alt="HTML" />HTML</div>
            <div><img className="image" src={CSS} alt="CSS" />CSS</div>
            <div><img className="image" src={JSCRIPT} alt="JavaScript" />JAVASCRIPT</div>
            <div><img className="image" src={BSTRAP} alt="Bootstrap" />BOOTSTRAP</div>
            <div><img className="image" src={REACTJS} alt="ReactJS" />REACTJS</div>
            <div><img className="image" src={JAVA} alt="Java" />JAVA</div>
            <div><img className="image" src={JDBC} alt="JDBC" />JDBC</div>
            <div><img className="image" src={HIBERNATE} alt="Hibernate" />HIBERNATE</div>
            <div><img className="image" src={SPRINGBOOT} alt="Spring and Spring Boot" />SPRING And SPRINGBOOT</div>
            <div><img className="image" src={MYSQL} alt="MySQL" />MYSQL</div>
            <div><img className="image" src={MONGO} alt="MongoDB" />MONGODB</div>
          </div>
          <div>
            <h2>ProgressBar</h2>
            <ProfessionalSkills/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
