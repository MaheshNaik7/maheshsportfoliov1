import React from 'react';
import '../App.css'; // Import your CSS file
import Footer from './Footer';
import NavBar from './NavBar';

function Contact() {
  return (
    <div>
      <NavBar/>
      <div className="main">
        <div className="contactform">
          <h1>contact me for work/general Enquiries</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="clientName" className="form-label">Name</label>
              <input type="text" className="form-control" id="clientName" aria-describedby="Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="clientEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="clientEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email and phone number with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="clientphone" className="form-label">Phone</label>
              <input type="phone" className="form-control" id="clientphone" />
            </div>
            <div className="mb-3">
              <label htmlFor="clientEnquiry" className="form-label">Enquiry</label>
              <input type="text" className="form-control" id="clientEnquiry" />
            </div>
            <div className="mb-3" id="form-check">
              <input type="checkbox" className="form-check-input" id="isClient" />
              <label className="form-check-label" htmlFor="isClient">I want you to work on a project with me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
