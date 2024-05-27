import React from "react";
import { NavLink } from "react-router-dom";

function WorldLanContent() {
  const arrowRight = (
    <svg
      style={{ fontWeight: "bolder" }}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="10"
      fill="currentColor"
      class="bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
      />
    </svg>
  );

  return (
    <>
      <div className="WorldLanContent-Container">
        <ul>
          <li className="WorldLanContent-Container-ul-li">
            {arrowRight}Select Language
          </li>
          <li className="WorldLanContent-Container-ul-li">
            <NavLink to={"/lan/hin"}>{arrowRight}Hindi</NavLink>
          </li>
          <li className="WorldLanContent-Container-ul-li">
            <NavLink to={"/lan/kan"}>{arrowRight}Kannada</NavLink>
          </li>
          <li className="WorldLanContent-Container-ul-li">
            <NavLink to={"/lan/mal"}>{arrowRight}Malayalam</NavLink>
          </li>
          <li className="WorldLanContent-Container-ul-li">
            <NavLink to={"/lan/tam"}>{arrowRight}Tamil</NavLink>
          </li>
          <li className="WorldLanContent-Container-ul-li">
            <NavLink to={"/lan/tel"}>{arrowRight}Telugu</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default WorldLanContent;

