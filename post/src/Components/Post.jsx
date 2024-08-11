import { useState } from "react";
import { NavLink } from "react-router-dom";
useState;
const Post = () => {
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");

  return (
    <div className="Container">
      <form className="form">
        <h1 className="LoginHeading">Login</h1>
        <div className="inputclass">
          <label id="email" htmlFor="E-mail">
            E-mail
          </label>

          <input
            type="email"
            placeholder="johnDoe@gmail.com"
            id="E-mail"
            required
          />
        </div>
        <div className="inputclass">
          <label id="password" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="johnDoe@gmail.com"
            id="E-mail"
            required
          />
        </div>

        <div className="select-content">
          <p>Select Content (Atlast 3)</p>
          <button
            className={`option ${color == "b" && "pink"}`}
            onClick={() => setColor("b")}
          >
            Blogs
          </button>
          <button
            className={`option ${color2 === "m" && "pink"}`}
            onClick={() => setColor2("m")}
          >
            Memes
          </button>
          <button
            className={`option ${color3 === "f" && "pink"}`}
            onClick={() => setColor3("f")}
          >
            Facts
          </button>
          <button
            className={`option ${color4 === "v" && "pink"}`}
            onClick={() => setColor4("v")}
          >
            Videos
          </button>
        </div>

        <div className="submit-button">
          <p>
            Not Having Account{" "}
            <NavLink to="/signup" className="signup">
              Signup
            </NavLink>
          </p>
          <button className="Loginbutton" type="submit">
            Login
          </button>
        </div>
      </form>
      {/* <img src="delphi.svg" className="logo" alt="" /> */}
    </div>
  );
};

export default Post;
