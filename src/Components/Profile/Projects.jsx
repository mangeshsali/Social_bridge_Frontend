import React, { useState } from "react";
import ProjectPOPUP from "../../Popup/ProjectPOPUP";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  const [ProjectPopup, setProjectPopup] = useState(false);
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex  justify-end">
        <button
          className=" btn-sm bg-white text-gray-800 font-semibold rounded-lg "
          onClick={() => setProjectPopup(true)}
        >
          + Add Project
        </button>
      </div>

      <div>
        <ProjectCards />
      </div>
      {ProjectPopup && <ProjectPOPUP setProjectPopup={setProjectPopup} />}
    </div>
  );
};

export default Projects;
