import React from 'react';

const Contact = () => {

    return(
    <div>
        <div>
            Contact image
        </div>
        <div className="contacts">
            <div className="socialMediaContacts">
                <label>Collumn Title: Social Media?</label>
                <label>Linkedin</label>
                <label>Twitter</label>
                <label>Reddit</label>
                <label>Instagram</label>
            </div>
            <div className="generalContacts">
                <label>Collumn Title: General Contacts?</label>
                <label>Email</label>
                <label>GitHub</label>
                <label>Patreon</label>
                <label>Youtube</label>
            </div>
        </div>
    </div>)
}

export default Contact;