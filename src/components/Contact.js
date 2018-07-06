import React from 'react';

const Contact = () => (
  <div>
    <div>Contact image</div>
    <div className="contacts">
      <div className="socialMediaContacts">
        <div className="contactCollumnTitle">Social Media</div>
        <div className="contactLinks">
          <div>Twitter</div>
          <div>LinkedIn</div>
          <div>Reddit</div>
          <div>Instagram</div>
        </div>
      </div>
      <div className="generalContacts">
        <div className="contactCollumnTitle">Contact Directly</div>
        <div className="contactLinks">
          <div>Email</div>
          <div>GitHub</div>
          <div>Patreon</div>
          <div>Youtube</div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
