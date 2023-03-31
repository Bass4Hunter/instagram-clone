import React, { useState, useEffect } from "react";
import PostCard from "./../elements/PostCard";
import { Post } from "../../types/Post";
import VirtualScroll from "../elements/VirtualScroll";
import usePost from "../../hooks/usePost";

const MainFeed = () => {
  const limit = 2;
  const buffer = limit * 3;
  const cache = buffer - limit;
  const [items, setItems] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getPosts } = usePost();

  const callApi = (offset: number, limit: number) => {
    return getPosts();
  };

  useEffect(() => {
    setIsLoading(true);
    callApi(0, buffer).then((res: any) => {
      setItems(res);
      setIsLoading(false);
    });
  }, []);

  const prevCallback = async (newOffset: number) => {
    if (newOffset < 0) {
      return false;
    }
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
