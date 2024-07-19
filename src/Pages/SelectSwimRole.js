import { useState } from "react";
import "../CSS/SelectSwimRole.css";
import { useNavigate } from "react-router-dom";

function SelectSwimRole({ setSwimRole }) {
  const [infinity, setInfinity] = useState(false);
  const [privates, setPrivate] = useState(false);
  const [jacuzzi, setJacuzzi] = useState(false);
  const nav = useNavigate();

  const infinityChange = () => {
    setInfinity((prev) => !prev);
  };
  const privateChange = () => {
    setPrivate((prev) => !prev);
  };
  const jacuzziChange = () => {
    setJacuzzi((prev) => !prev);
  };
  const infinitypool = () => {
    setSwimRole("infinity");
    nav("/swims");
  };
  const privatepool = () => {
    setSwimRole("private");
    nav("/swims");
  };

  const jacuzzipool = () => {
    setSwimRole("jacuzzi");
    nav("/swims");
  };

  return (
    <div className="selectswim">
      <div className="selectbody">
        <div
          className="infinity"
          style={{ opacity: infinity ? "100%" : "50%" }}
          onMouseOver={infinityChange}
          onMouseOut={infinityChange}
          onClick={infinitypool}
        >
          <span className="swim-text">INFINITY</span>
        </div>
        <div
          className="private"
          style={{ opacity: privates ? "100%" : "50%" }}
          onMouseOver={privateChange}
          onMouseOut={privateChange}
          onClick={privatepool}
        >
          <span className="swim-text">PRIVATE</span>
        </div>
        <div
          className="jacuzzi"
          style={{ opacity: jacuzzi ? "100%" : "50%" }}
          onMouseOver={jacuzziChange}
          onMouseOut={jacuzziChange}
          onClick={jacuzzipool}
        >
          <span className="swim-text">JACUZZI</span>
        </div>
      </div>
    </div>
  );
}

export default SelectSwimRole;
