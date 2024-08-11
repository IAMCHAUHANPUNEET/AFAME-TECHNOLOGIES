import { useRef, useState } from "react";

function Projects() {
  const [onMouse, setHower] = useState(false);

  // Create separate refs for each video element
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleOnHover = (videoRef) => {
    setHower(true);
    videoRef.current.play(); // Play the specific video using the ref
  };

  const handleOndown = () => {
    setHower(false);
  };

  return (
    <>
      <div className="ProjectsMaindiv">
        <h2 className="ProjectsHeading">Projects</h2>
        <div className="ProjectVideoView">
          <div className="ProjectsdataContainer">
            <video
              ref={videoRef1}
              src="sm.mp4"
              controls={onMouse}
              onMouseOver={() => handleOnHover(videoRef1)}
              onMouseDown={handleOndown}
              autoPlay={onMouse}
              className="Video"
            >
              {" "}
            </video>
            <div className="videoDescription">
              <h3 className="videoDescriptionText">Social Media Application</h3>
            </div>
          </div>
          <div className="ProjectsdataContainer">
            <video
              ref={videoRef2}
              src="ecm.mp4"
              controls={onMouse}
              onMouseOver={() => handleOnHover(videoRef2)}
              onMouseDown={handleOndown}
              autoPlay={onMouse}
              className="Video"
            >
              {" "}
            </video>
            <div className="videoDescription">
              <h3 className="videoDescriptionText">E-commerce Application</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
