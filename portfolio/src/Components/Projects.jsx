import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Projects() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="projectContainer">
          <h1>Projects</h1>
          <div className="project">
            <h2>Todo Application</h2>
            <p>
              A full-stack Java application utilizing Spring Boot for the
              backend, React for the frontend, and establishing communication
              between them through REST APIs. Integrate JPA and Hibernate to
              enable seamless interaction between the Spring Boot application
              and the database.
            </p>
          </div>

          <div className="project">
            <h2>TuneHub Music Application</h2>
            <p>
              Tune Hub is a music application that utilizes Spring Boot and
              Hibernate for its backend infrastructure. Its frontend, developed
              with React.js, interacts seamlessly with the backend through
              RESTful APIs and the database.
              Technologies used - SpringBoot, ReactJs, JPA and Hibernate, MySQL
            </p>
          </div>
          <div className="project">
            <h2>Internship Project: Securing IOT data using Blockchain</h2>
            <p>
              Blockchain has emerged as the possible solution for creating more
              secure IoT systems in the time to come to come. In this paper,
              first an overview of the blockchain technology and its
              implementation has been explained; the security of internet of
              things using blockchain.–(Python, Django, MySQL, Wamp Server 2.4)
            </p>
          </div>
          <div className="project">
            <h2>Vehicle Service Management System</h2>
            <p>
              This system “Vehicle Service Management System (VSMS)” allows
              providing vehicle for service. If customer got any problem with
              his vehicle, they are providing services - Using PHP and MySQL.
              The real power of this project lies not in direct selling of
              products, but in the creation of tighter relationships with
              customers and delivering of a high level of service and support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;

