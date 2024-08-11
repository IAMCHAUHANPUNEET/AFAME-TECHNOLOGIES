import { useRef, useState } from "react";
function Contact() {
  const [getemail, setemail] = useState();
  const [getmessage, setmeesage] = useState();
  const getvalue = useRef();
  const handleOnclick = (e) => {
    e.preventDefault();
    console.log(getvalue.current.value);
  };
  return (
    <>
      <h2 className="ContactHeading">Contact Details</h2>
      <div className="ContactMain">
        <div className="ContactLinks">
          <div className="contactLinkbox">
            <img src="Gmail.svg" className="Linklogo" alt="" />
            <h3 className="linkdetails">Iamchauhanpuneet@gmail.com</h3>
          </div>
          <div className="contactLinkbox">
            <img src="Linkedin.svg" className="Linklogo" alt="" />
            <h3 className="linkdetails">@Iamchauhanpuneet</h3>
          </div>
          <div className="contactLinkbox">
            <img src="Github.svg" className="Linklogo" alt="" />
            <h3 className="linkdetails">@puneetchauhan</h3>
          </div>
          <div className="contactLinkbox">
            <img src="ig.svg" className="Linklogo" alt="" />
            <h3 className="linkdetails">@Iamchauhanpuneet</h3>
          </div>
        </div>

        <form className="ContactFrom">
          <label htmlFor="gmail" className="gmail">
            Email:
          </label>
          <br></br>
          <input
            type="email"
            placeholder="JohnDoe@gmail.com"
            id="gmail"
            onChange={(e) => setemail(e.target.value)}
            required
            ref={getvalue}
          />
          <br></br>
          <label htmlFor="Send" className="Send">
            Send Message
          </label>
          <br></br>
          <textarea
            name=""
            id="Send"
            rows="4"
            onChange={(e) => setmeesage(e.target.value)}
          ></textarea>
          <button
            className="SendButtton"
            type="Submit"
            onClick={(e) => handleOnclick(e)}
          >
            {" "}
            Send
          </button>
        </form>
      </div>
    </>
  );
}
export default Contact;
