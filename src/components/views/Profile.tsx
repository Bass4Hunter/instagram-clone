import React, { FC, ReactElement, useEffect, useState } from "react";
import useLogout from "../../hooks/useLogout";
import { Post } from "../../types/Post";
import { User } from "../../types/User";
import PostCard from "../elements/PostCard";
import PostsGallery from "../elements/PostsGallery";
import VirtualScroll from "../elements/VirtualScroll";
import { BiLogOut } from "react-icons/bi";

function generateMockupPosts(offset: number, limit: number) {
  const posts: Post[] = [];
  for (let idx = offset; idx < offset + limit; idx++) {
    posts.push({
      title: `title_${idx}`,
      imageSrc: "https://images.wsj.net/im-491405?width=1280&size=1",
      from: "mockup",
      time: new Date(),
    });
  }
  return posts;
}

const callApi = (offset: number, limit: number) => {
  return new Promise<Post[]>((resolve) => {
    const items = generateMockupPosts(offset, limit);
    resolve(items);
  });
};

type Props = {
  user: User;
};

const Profile: FC<Props> = ({ user }): ReactElement => {
  const limit = 2;
  const buffer = limit * 3;
  const cache = buffer - limit;
  const [items, setItems] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { logoutUser } = useLogout();

  useEffect(() => {
    setIsLoading(true);
    callApi(0, buffer).then((res: any) => {
      setItems(res);
      setIsLoading(false);
    });
  }, []);

  const prevCallback = async (newOffset: number) => {
    setIsLoading(true);

    const res = await callApi(newOffset, limit);
    const newItems = [...res, ...items.slice(0, cache)] as any;
    setItems(newItems);
    setIsLoading(false);
    return true;
  };

  const nextCallback = async (newOffset: number) => {
    setIsLoading(true);

    const res = await callApi(newOffset, limit);
    const newItems = [...items.slice(-cache), ...res] as any;
    setItems(newItems);
    setIsLoading(false);
    return true;
  };

  return (
    <VirtualScroll
      buffer={buffer}
      rowHeight={300}
      style="flex-grow overflow-y-scroll"
      limit={limit}
      onPrevCallback={prevCallback}
      onNextCallback={nextCallback}
      header={
        <div className="flex items-center justify-center m-4">
          <img
            src={
              "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            }
            alt={`${user.username}'s profile image`}
            className="rounded-full w-24 h-24 object-cover"
          />
          <div className="ml-6">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl mr-10">{user.username}</h1>
              <button
                onClick={logoutUser}
                className="bg-secondary text-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <BiLogOut size={28} className="mr-2" />
                <span>Logout</span>
              </button>
            </div>
            <div className="flex mt-2">
              <div className="mr-6">
                <p className="font-bold">{"10"}</p>
                <p className="text-sm text-gray-500">Posts</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <>
        {items.map((item) => (
          <div style={{ padding: "10px" }}>
            {isLoading ? <>Loading...</> : <PostCard {...item} />}
          </div>
        ))}
      </>
    </VirtualScroll>
  );
};

export default Profile;
