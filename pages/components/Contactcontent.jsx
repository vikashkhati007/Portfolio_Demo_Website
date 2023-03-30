import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Contactcontent() {
  const router = useRouter();
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function generateMailto() {
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (email && message) {
      const mailtoLink =
        'mailto:vikashkhati007@gmail.com?subject=' +
        encodeURIComponent('Contact Form Submission') +
        '&body=' +
        encodeURIComponent(
          'Name : ' +
            firstname +
            ' ' +
            lastname +
            '\n' +
            'Email : ' +
            email +
            '\n' +
            'Message: ' +
            message
        );

      window.location.href = mailtoLink;
      router.push("/home");
      
    }
  }

  return (
    <>
      <div className="contactcontainer">
        <div className="itemscontainer">
          <h1 className="contact">CONTACT US</h1>
          <div className="inputcontainer">
            <form action="#">
              <div>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Enter Your First Name"
                  ref={firstnameRef}
                />
                <input
                  id="lastname"
                  type="text"
                  placeholder="Enter Your Last Name"
                  ref={lastnameRef}
                />
              </div>
              <div className="emailtextareafield">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Name"
                  required={true}
                  ref={emailRef}
                />
                <textarea
                  id="message"
                  className="textarea"
                  placeholder="Enter Your Message Here?"
                  required={true}
                  ref={messageRef}
                ></textarea>
              </div>
              <div className="form-btn">
                <button onClick={generateMailto}>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
