import { useEffect, useState } from "react";
import Header from "./Header";
import "../CSS/Swims.css";
import PrivatePool from "../component/PrivatePool.js";
import InfinityPool from "../component/InfinityPool.js";
import JacuzziPool from "../component/JacuzziPool.js";
// import SelectSwimRole from "../component/SelectSwimRole.js";

function Swims({ swimRole, setSwimRole }) {
  const selectPrivate = () => {
    setSwimRole("private");
  };
  const selectInfinity = () => {
    setSwimRole("infinity");
  };
  const selectJacuzzi = () => {
    setSwimRole("jacuzzi");
  };

  return (
    <div className="swimBody">
      <p></p>
      <nav className="roleBar2">
        <div
          style={{
            backgroundColor: swimRole === "infinity" ? "#ced4da" : "white",
          }}
          className="roleBar2-content"
          onClick={selectInfinity}
        >
          <span className="roleBar2-content-text">INFINITY</span>
        </div>
        <div
          className="roleBar2-content"
          style={{
            backgroundColor: swimRole === "private" ? "#ced4da" : "white",
          }}
          onClick={selectPrivate}
        >
          <span className="roleBar2-content-text">PRIVATE</span>
        </div>
        <div
          style={{
            backgroundColor: swimRole === "jacuzzi" ? "#ced4da" : "white",
          }}
          className="roleBar2-content"
          onClick={selectJacuzzi}
        >
          <span className="roleBar2-content-text">JACUZZI</span>
        </div>
      </nav>
      {swimRole === "infinity" ? <InfinityPool /> : ""}
      {swimRole === "private" ? <PrivatePool /> : ""}
      {swimRole === "jacuzzi" ? <JacuzziPool /> : ""}
    </div>
  );
}

export default Swims;
