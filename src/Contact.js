import React from 'react';
import './css/contactStyle.css';

export default function Contact() {
    return (
        <div>
          <h2 style={{
              margin: '1rem',
              fontSize: '2.5rem'
        }}>Get in Touch</h2>
        <hr/>
          <div className="contact">
            <p>Feel free to reach out at the following - I'd love to get to know you!</p>
            <div>
                <ul className="contactList">
                  <li><a href="https://github.com/Atlas238">Visit My Github Profile</a></li>
                  <li><a href="https://www.linkedin.com/">Visit My LinkedIn Profile</a></li>
                  <li><a href="mailto:jack@bentsen.us">Send me an Email</a></li>
                </ul>
            </div>
          </div>
        </div>

    )
}