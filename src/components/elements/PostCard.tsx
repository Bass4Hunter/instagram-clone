import React, { FC, ReactElement } from "react";
import { formatDistance } from "date-fns";
import { Post } from "../../types/Post";

const PostCard: FC<Post> = ({
  title,
  imageSource,
  from,
  time,
}): ReactElement => {
  // const distance = formatDistance(time, new Date());

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex-grow">
      <div className="pt-1 pl-3">
        <h2 className="text-xl font-black	m-0">{title}</h2>

        <div className="flex flex-row mt-0.5">
          <h4 className="font-semibold ">{from}</h4> &middot;
          <p className="opacity-75">{}</p>
        </div>
      </div>
      <div
        className="h-[414px] w-[414px] aspect-w-1 aspect-h-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSource})` }}
      ></div>
    </div>
  );
};

export default PostCard;
