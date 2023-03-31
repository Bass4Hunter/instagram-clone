import React, { FC, ReactElement, useContext, useState } from "react";
import { GlobalContext } from "../../hooks/GlobalContext";
import useForm from "../../hooks/useForm";
import usePost from "../../hooks/usePost";
import { ImageChecker } from "../elements/ImageChecker";

type Props = {};

const NewPost: FC<Props> = (): ReactElement => {
  const { values, handleChange } = useForm({
    title: "",
    imageSrc: "",
  });
  const { sendPost } = usePost();
  const { user, setMessage, setStatus } = useContext(GlobalContext);

  const handleUpload = async () => {
    if (!values.title) {
      if (!setMessage) return;
      if (!setStatus) return;
      setMessage("Title missing");
      setStatus("ERROR");
      return;
    }

    if (!values.imageSrc) {
      if (!setMessage) return;
      if (!setStatus) return;
      setMessage("Image url missing");
      setStatus("ERROR");
      return;
    }

    await sendPost({
      title: values.title,
      imageSource: values.imageSrc,
      from: user?.username ?? "",
      time: new Date(),
    });
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
            name="imageSrc"
            placeholder="https://example.com/image.jpg"
            value={values.imageSrc}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <ImageChecker imgSrc={values.imageSrc} />
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
            name="title"
            type="text"
            placeholder="Enter image name"
            value={values.title}
            onChange={handleChange}
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
