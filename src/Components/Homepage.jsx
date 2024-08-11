function Homepage() {
  return (
    <>
      <div className="Divider">
        <div className="Description">
          <h1 className="DescriptionHeading">
            I Code To Build Beautiful, Functional Experiences
          </h1>
          <h5 className="DescriptionBody">
            I am a FrontEnd Developer Having Good Grip and Hands on Experience
            on FrontEnd Web Development
          </h5>
        </div>
        <div className="images">
          <div className="Myimage">
            <img src="Boy.webp" className="actualpicture" alt="image" />
          </div>
          <div className="Techlogos">
            <div className="logobox">
              <img src="Html.svg" className="actualLogo" alt="" />
            </div>
            <div className="logobox">
              <img src="Css.svg" className="actualLogo" alt="" />
            </div>
            <div className="logobox">
              <img src="Javascript.svg" className="actualLogo" alt="" />
            </div>
            <div className="logobox">
              <img src="ReactJs.svg" className="actualLogo" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;
