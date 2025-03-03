import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const CreatePostPOPUP = ({ setCreatePopstPopup }) => {
  const [post, setPost] = useState({
    description: "",
    media: null,
  });
  const handleDescriptionChange = (e) => {};

  const handleMediaChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-deep-navy p-6 rounded-lg shadow-lg w-[400px] relative">
        <h2 className="text-xl font-semibold my-4">Create Post</h2>

        <div
          className=" absolute top-4 right-4  cursor-pointer"
          onClick={() => setCreatePopstPopup((prev) => !prev)}
        >
          <IoMdCloseCircle className=" text-2xl" />
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Description */}
          <textarea
            name="description"
            placeholder="Write something..."
            className="textarea textarea-bordered w-full"
            rows="3"
            value={post.description}
            onChange={handleDescriptionChange}
            required
          ></textarea>

          {/* Media Upload */}
          <label className="block">
            <span className="font-medium ">Attach Media:</span>
            <input
              type="file"
              accept="image/*,video/*"
              className="file-input file-input-bordered w-full mt-2"
              onChange={handleMediaChange}
            />
          </label>

          {/* Preview */}
          {post.media && (
            <div className="mt-3">
              <p className="text-sm font-medium">Preview:</p>
              <img
                src={post.media}
                alt="Media Preview"
                className="mt-2 w-full h-[200px] object-cover rounded-lg"
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-3">
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPOPUP;
