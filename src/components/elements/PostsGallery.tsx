import React, { useState, useEffect, FC } from "react";
import PostCard from "./PostCard";
import { Post } from "../../types/Post";

type Props = {
  posts: Post[];
  isLoading: boolean;
  onScroll: (page: number) => Promise<void>;
  style: string;
};

const PostsGallery: FC<Props> = ({ posts, isLoading, onScroll, style }) => {
  const [page, setPage] = useState(1);

  // Load more items when user scrolls to bottom of the div
  const handleScroll = () => {
    console.log("SCROLLED");
    const div = document.getElementById("post-gallery");
    if (!div) return;
    if (div.scrollTop + div.clientHeight < div.scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // Set up event listener for scrolling
    const div = document.getElementById("post-gallery");
    if (!div) return;
    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    onScroll(page);
  }, [page]);

  return (
    <div id={"post-gallery"} className="flex-grow overflow-y-scroll">
      <div className={style}>
        {posts.map((post) => (
          <PostCard {...post} />
        ))}
      </div>
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
        </div>
      )}
    </div>
  );
};

export default PostsGallery;
