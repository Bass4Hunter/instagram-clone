import React, { FC, ReactElement, useState } from "react";

type Props = {};

const NewPost: FC<Props> = (): ReactElement => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleUrlChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setImageUrl(e.target.value);
    setPreviewUrl(e.target.value);
  };

  const handleNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setImageName(e.target.value);
  };

  const handleUpload = () => {
    // Handle upload logic here
  };

  return (
    <div className="flex-grow ">
      <div className="flex items-center justify-center mt-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">Upload Image</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image-url"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image-url"
              type="text"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={handleUrlChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image-preview"
            >
              Preview
            </label>
            <img
              src={previewUrl}
              alt="Preview"
              id="image-preview"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image-name"
            >
              Image Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image-name"
              type="text"
              placeholder="Enter image name"
              value={imageName}
              onChange={handleNameChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
