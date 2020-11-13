import React from "react";

const ContactForm = () => {
    return (
        <form className="form">
                <form className="form-data" method="POST" action="https://api.slapform.com/mat.piotrowsky87@gmail.com">
                    <div className="input1"><input type="text" name="name" placeholder="Imię"/></div>
                    <div className="input2"><input type="email" name="email" placeholder="Email"/></div>
                    <textarea className="input3" type="text" placeholder="Wiadomość" name="message"></textarea>
                    <button type="submit" className="btn">Wyślij</button>
                </form>
        </form>
    )
};

export default ContactForm;

