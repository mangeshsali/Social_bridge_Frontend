import axios from "axios";
import React, { useState } from "react";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";
import { REACT_APP_BASE_URL } from "../../envSample";
import toast from "react-hot-toast";

const CreatePostPOPUP = ({ setCreatePopstPopup }) => {
  const [post, setPost] = useState({
    post: "",
    Image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const POSTCreate = async (formData) => {
    try {
      const res = await axios.post(REACT_APP_BASE_URL + "/post", formData, {
        withCredentials: true,
      });

      toast.success("Post Created Suceessfully");
      setCreatePopstPopup(false);
      setLoading(false);
    } catch (error) {
      console.log("err", error.messagae);
    }
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPost((prev) => ({ ...prev, Image: file }));

      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("post", post.post);
    formData.append("Image", post.Image);
    setLoading(true);
    POSTCreate(formData);
  };

  const RemoveImage = () => {
    setPost((prev) => ({ ...prev, Image: null }));
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
            name="post"
            placeholder="Write something..."
            className="textarea textarea-bordered w-full"
            rows="3"
            value={post.post}
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
          {post.Image && (
            <div className="mt-3  relative">
              <p className="text-sm font-medium">Preview:</p>
              <img
                src={previewImage}
                alt="Media Preview"
                className="mt-2 w-full h-[200px] object-contain rounded-lg"
              />
              <div className=" absolute  top-0 right-0">
                <IoMdCloseCircle
                  className="text-2xl cursor-pointer"
                  onClick={RemoveImage}
                />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={Loading}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPOPUP;
