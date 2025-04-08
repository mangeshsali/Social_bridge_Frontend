import React, { useEffect, useState } from "react";
import ProjectPOPUP from "../../Popup/ProjectPOPUP";
import ProjectCards from "./ProjectCards";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../../envSample";

const Projects = () => {
  const [ProjectPopup, setProjectPopup] = useState(false);
  const [ProjectList, setProjectList] = useState([]);

  const GETProjectList = async () => {
    try {
      const res = await axios.get(REACT_APP_BASE_URL + "/projectlist", {
        withCredentials: true,
      });
      console.log(res.data.project);
      setProjectList(res?.data?.project);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  useEffect(() => {
    GETProjectList();
  }, []);

  console.log(ProjectList);
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

      <div className="flex flex-col gap-4">
        {!ProjectList ? (
          <div className="flex justify-center my-10">
            <p className="font-semibold text-lg">
              No Project Found Add Project
            </p>
          </div>
        ) : (
          ProjectList &&
          ProjectList.map((project) => {
            return <ProjectCards Project={project} />;
          })
        )}
      </div>
      {ProjectPopup && (
        <ProjectPOPUP
          setProjectPopup={setProjectPopup}
          refreshProjects={GETProjectList}
        />
      )}
    </div>
  );
};

export default Projects;
