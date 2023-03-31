import React, { useState, useEffect } from "react";
import PostCard from "./../elements/PostCard";
import { Post } from "../../types/Post";
import VirtualScroll from "../elements/VirtualScroll";

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

const MainFeed = () => {
  const limit = 2;
  const buffer = limit * 3;
  const cache = buffer - limit;
  const [items, setItems] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

export default MainFeed;
