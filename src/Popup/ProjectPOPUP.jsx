import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { ErrorHandling } from "../Utils/ErrorHandling";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../envSample";
import toast from "react-hot-toast";

const ProjectPOPUP = ({ setProjectPopup, refreshProjects, EditProject }) => {
  const [project, setProject] = useState({
    projectName: "",
    projectHeadline: "",
    projectDescription: "",
    projectStack: "",
    projectLink: "",
    projectGithub: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (EditProject) {
      setProject({
        projectName: EditProject.projectName,
        projectHeadline: EditProject.projectHeadline,
        projectDescription: EditProject.projectDescription,
        projectStack: EditProject.projectStack,
        projectLink: EditProject.projectLink,
        projectGithub: EditProject.projectGithub,
      });
    }
  }, [EditProject]);

  const POSTProject = async () => {
    try {
      const res = await axios.post(REACT_APP_BASE_URL + "/project", project, {
        withCredentials: true,
      });
      refreshProjects();
      setProjectPopup(false);
      toast.success("Project Created Successfully");
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const PUTProject = async () => {
    try {
      const res = await axios.put(
        REACT_APP_BASE_URL + `/project/${EditProject._id}`,
        project,
        {
          withCredentials: true,
        }
      );
      refreshProjects();
      setProjectPopup(false);
      toast.success("Project Updated Successfully");
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (EditProject) {
      PUTProject();
    } else {
      POSTProject();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-deep-navy p-6 rounded-lg shadow-lg w-[480px] relative">
        <h2 className="text-2xl font-semibold  mb-6">Add Project</h2>

        <div>
          <button
            className=" absolute right-3 top-2"
            onClick={() => setProjectPopup((prev) => !prev)}
          >
            <IoMdCloseCircle className=" text-3xl text-white" />
          </button>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Project Name */}
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            className="input input-bordered w-full"
            value={project.projectName}
            onChange={handleChange}
            required
          />

          {/* Project Headline */}
          <input
            type="text"
            name="projectHeadline"
            placeholder="Project Headline"
            className="input input-bordered w-full"
            value={project.projectHeadline}
            onChange={handleChange}
            required
          />

          {/* Project Description */}
          <textarea
            name="projectDescription"
            placeholder="Project Description"
            className="textarea textarea-bordered w-full"
            rows="3"
            value={project.projectDescription}
            onChange={handleChange}
            required
          ></textarea>

          {/* Tech Stack */}
          <input
            type="text"
            name="projectStack"
            placeholder="Tech Stack (e.g., React, Node.js)"
            className="input input-bordered w-full"
            value={project.projectStack}
            onChange={handleChange}
            required
          />

          {/* Deploy Link */}
          <input
            type="url"
            name="projectLink"
            placeholder="Deploy Link"
            className="input input-bordered w-full"
            value={project.projectLink}
            onChange={handleChange}
          />

          {/* GitHub Link */}
          <input
            type="url"
            name="projectGithub"
            placeholder="GitHub Link"
            className="input input-bordered w-full"
            value={project.projectGithub}
            onChange={handleChange}
            required
          />

          {/* Buttons */}
          <div className=" flex justify-end mt-3">
            <button type="submit" className="btn btn-primary">
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectPOPUP;
