import React,{ useRef } from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_pg7pgtc', 'template_1k5e61i', form.current, 'bwD-TOYCKiN3uheCG')
		.then((result) => {
			console.log(result.text);
			console.log("message sent");
		}, (error) => {
			console.log(error.text);
		});
	};
	return (
		<>
			<Header title="Contact Us"  image={HeaderImage}>
				Write a message to get in touch with us.
				<div><br />
				<form ref={form} onSubmit={sendEmail}>
      				<label className="name">Your Name</label><br />
      				<input className="namebox" type="text" name="user_name" /><br />
      				<label className="email">Your Email</label><br />
      				<input className="emailbox" type="email" name="user_email" /><br />
      				<label className="msg">Message</label><br />
      				<textarea className="msgbox" name="message" /><br />
      				<input className="submit" type="submit" value="Send" />
   				</form>
				</div>
			</Header>
			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						<a
							href="mailto:it.eniolaademola@gmail.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<MdEmail />
						</a>
						<a
							href="https://www.facebook.com/eniola.ademola.1610/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<BsMessenger />
						</a>
						<a
							href="https://wa.me/+2347013909098"
							target="_blank"
							rel="noreferrer noopener"
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
