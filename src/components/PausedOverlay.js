import { css } from "@emotion/css";
import "../styles/App.css"


const PausedOverlay = () => (
  <div  >
    {/* {console.log(window.screen.width)} */}
    <div
    >
      {/* <h1>hello</h1> */}
      <h3 className="text-white caption">{window.screen.width >= 1000 ? "Hover to play" : "Click to play"}</h3>
    </div>
  </div>
);

export default PausedOverlay;
