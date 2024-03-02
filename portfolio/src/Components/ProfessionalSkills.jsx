import React from 'react';
import '../App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';





const ProfessionalSkills = () => {
   
    return (
      <div className="section" id="skill">
        <div className="container">
          <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">HTML</span>
                  <div class="progress">
                    <div class="progress-bar  progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>90%</div>
                  </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">CSS</span>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped active" role="progressbar"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>70%</div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="row">
              <div class="col-md-6">
                <div class="progress-container progress-primary"><span class="progress-badge">JavaScript</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>70%</div>
                </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-container progress-primary"><span class="progress-badge">ReactJs</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}>65%</div>
                </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="progress-container progress-primary"><span class="progress-badge">Bootstrap</span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>80%</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-container progress-primary"><span class="progress-badge">Java</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped active" role="progressbar"  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>75%</div>
                </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="progress-container progress-primary"><span class="progress-badge">JDBC</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'95%'}}>95%</div>
                </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-container progress-primary"><span class="progress-badge">SpringBoot</span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>75%</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="progress-container progress-primary"><span class="progress-badge">Hibernate</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'95%'}}>95%</div>
                </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-container progress-primary"><span class="progress-badge">MySQL</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>80%</div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }


export default ProfessionalSkills;
