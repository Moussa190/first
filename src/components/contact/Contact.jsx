import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    const serviceId = 'service_ylp81l1';
    const templateId = 'template_p7yktv8';
    const publicKey = '17heQmHgnxfZgh-gM';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        alert('Ihre Nachricht wurde erfolgreich gesendet!');
        e.target.reset(); 

      }, (error) => {
        console.log(error.text);
        alert('Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
      });
  };

  
  return (
    <>
          {/* ======= Contact Section ======= */}
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact</h2>
      <p>Kontaktieren Sie uns</p>
    </div>
    <div>
      <iframe style={{border: 0, width: '100%', height: 270}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160687.06137576685!2d10.904760457965963!3d48.40492317725709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ebcf107771cad%3A0x8779b685da0a518c!2sAm%20Haferfeld%2015!5e1!3m2!1sar!2sde!4v1758740511173!5m2!1sar!2sde" frameBorder={0} allowFullScreen />
    </div>
    <div className="row mt-5">
      <div className="col-lg-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt" />
            <h4>Location:</h4>
            <p>Am Haferfeld 15, 86156 Augsburg</p>
          </div>
          <div className="email">
            <i className="bi bi-envelope" />
            <h4>Email:</h4>
            <p>info@umzügetransportgroup.de</p>
          </div>
          <div className="phone">
            <i className="bi bi-phone" />
            <h4>Call:</h4>
            <p>+49 157 591 295 00</p>
          </div>
        </div>
      </div>


      <div className="col-lg-8 mt-5 mt-lg-0">


            <form ref={form} onSubmit={sendEmail} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">

                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>






      </div>


    </div>
  </div>
</section>
{/* End Contact Section */}

    </>
  )
}
