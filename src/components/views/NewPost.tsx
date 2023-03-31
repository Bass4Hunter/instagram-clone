import React, { FC, ReactElement, useState } from "react";
import { ImageChecker } from "../elements/ImageChecker";

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
    <div className="flex-grow flex items-center justify-center">
      <div className="w-full flex flex-col items-center h-full m-4">
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="image-url"
          >
            Enter an image URL
          </label>
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image-url"
            type="text"
            placeholder="https://example.com/image.jpg"
            value={imageUrl}
            onChange={handleUrlChange}
          />
        </div>
        <div className="mb-4 w-full">
          <ImageChecker imgSrc={previewUrl} />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="image-name"
          >
            Give it a name:
          </label>
          <input
            className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image-name"
            type="text"
            placeholder="Enter image name"
            value={imageName}
            onChange={handleNameChange}
          />
        </div>
        <button
          className="w-full bg-secondary  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleUpload}
        >
          Post now!
        </button>
      </div>
    </div>
    // <div className="flex-grow">
    //   <div className="flex h-full items-center justify-center mt-4 items-center">
    //     <div className="w-full mx-auto align-middle">

    //     </div>
    //   </div>
    // </div>
  );
};

export default NewPost;
