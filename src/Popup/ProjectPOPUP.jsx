import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const ProjectPOPUP = ({ setProjectPopup }) => {
  const [project, setProject] = useState({
    name: "",
    headline: "",
    description: "",
    techStack: "",
    deployLink: "",
    githubLink: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data:", project);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
            name="name"
            placeholder="Project Name"
            className="input input-bordered w-full"
            value={project.name}
            onChange={handleChange}
            required
          />

          {/* Project Headline */}
          <input
            type="text"
            name="headline"
            placeholder="Project Headline"
            className="input input-bordered w-full"
            value={project.headline}
            onChange={handleChange}
            required
          />

          {/* Project Description */}
          <textarea
            name="description"
            placeholder="Project Description"
            className="textarea textarea-bordered w-full"
            rows="3"
            value={project.description}
            onChange={handleChange}
            required
          ></textarea>

          {/* Tech Stack */}
          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack (e.g., React, Node.js)"
            className="input input-bordered w-full"
            value={project.techStack}
            onChange={handleChange}
            required
          />

          {/* Deploy Link */}
          <input
            type="url"
            name="deployLink"
            placeholder="Deploy Link"
            className="input input-bordered w-full"
            value={project.deployLink}
            onChange={handleChange}
          />

          {/* GitHub Link */}
          <input
            type="url"
            name="githubLink"
            placeholder="GitHub Link"
            className="input input-bordered w-full"
            value={project.githubLink}
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
