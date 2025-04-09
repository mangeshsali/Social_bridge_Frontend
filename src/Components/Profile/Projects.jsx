import React, { useEffect, useState } from "react";
import ProjectPOPUP from "../../Popup/ProjectPOPUP";
import ProjectCards from "./ProjectCards";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../../envSample";
import toast from "react-hot-toast";

const Projects = () => {
  const [ProjectPopup, setProjectPopup] = useState(false);
  const [ProjectList, setProjectList] = useState([]);
  const [EditProject, setEditProject] = useState(null);

  const GETProjectList = async () => {
    try {
      const res = await axios.get(REACT_APP_BASE_URL + "/projectlist", {
        withCredentials: true,
      });
      setProjectList(res?.data?.project);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const DeleteHandler = async (id) => {
    try {
      const resp = await axios.delete(
        REACT_APP_BASE_URL + `/deleteproject/${id}`,
        { withCredentials: true }
      );
      setProjectList((prev) => prev.filter((project) => project._id != id));
      setProjectPopup(false);
      toast.success("Deleted Successfully");
    } catch (error) {
      ErrorHandling(error);
    }
  };

  useEffect(() => {
    GETProjectList();
  }, []);

  const EditData = (project) => {
    setProjectPopup(true);
    setEditProject(project);
  };
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
            return (
              <ProjectCards
                Project={project}
                DeleteHandler={DeleteHandler}
                setProjectPopup={setProjectPopup}
                EditData={EditData}
              />
            );
          })
        )}
      </div>
      {ProjectPopup && (
        <ProjectPOPUP
          setProjectPopup={setProjectPopup}
          refreshProjects={GETProjectList}
          EditProject={EditProject}
        />
      )}
    </div>
  );
};

export default Projects;
