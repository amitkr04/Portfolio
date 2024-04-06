import React, { useRef, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import images from "../../assets/images/contact.jpg";
import "./Contact.css";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  //clear the form input fields after submission hook use useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t17bcpg",
        "template_xq95d8i",
        form.current,
        "7FPCAvyXXGUL2KREG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          // Show a success toast notification
          //notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => toast("Message sent Successfully!");

  return (
    <>
      <div className="contact" id="Contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={images} alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact with
                      <a href="https://www.linkedin.com/in/amit-kumar-b43130216/a">
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="https://github.com/amitkr04">
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100021845257379">
                        <BsFacebook color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="https://www.instagram.com/amit_kashyapa_/">
                        <BsInstagram
                          color="rgb(228, 64, 95)"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="to_name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="from_name"
                        placeholder="Enter your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Write your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <button onClick={notify} className="button" type="submit">
                        SEND MESSAGE
                      </button>
                      <ToastContainer
                        position="top-right"
                        autoClose={1000}
                        pauseOnHover={false}
                        transition={Slide}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
