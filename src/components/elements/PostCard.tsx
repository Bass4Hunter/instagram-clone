import React, { FC, ReactElement } from "react";

export type Post = {
  title: string;
  imageSrc: string;
  from: string;
  time: Date;
};

const PostCard: FC<Post> = ({ title, imageSrc, from, time }): ReactElement => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex-grow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{from}</p>
      </div>
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
    </div>
  );
};

export default PostCard;
