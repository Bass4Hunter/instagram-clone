import React, { useState, useEffect } from "react";
import PostCard, { Post } from "./../elements/PostCard";

type ResponsePost = {
  title: string;
  imageSrc: string;
  from: string;
  time: Date;
};

type ResponseGetHomeFeed = {
  page: number;
  homeFeed: ResponsePost[];
};

function generateMockupPosts(size: number) {
  const posts: ResponsePost[] = [];
  for (let idx = 0; idx < size; idx++) {
    posts.push({
      title: `title_${idx}`,
      imageSrc: "https://images.wsj.net/im-491405?width=1280&size=1",
      from: "mockup",
      time: new Date(),
    });
  }
  return posts;
}

function generateResponse(page: number): ResponseGetHomeFeed {
  return {
    page,
    homeFeed: generateMockupPosts(10),
  };
}

const MainFeed = () => {
  const [items, setItems] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Load more items when user scrolls to bottom of the div
  const handleScroll = () => {
    const div = document.querySelector(".flex-grow");
    if (!div) return;
    if (div.scrollTop + div.clientHeight === div.scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // Set up event listener for scrolling
    const div = document.querySelector(".flex-grow");
    if (!div) return;
    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Load new items from API when page changes
    const fetchData = async () => {
      setIsLoading(true);
      // request
      // const response = await fetch(
      //   `https://api.example.com/items?page=${page}`
      // );
      // const data = await response.json();
      const response = generateResponse(page);
      const data = response.homeFeed;
      setItems((prevItems) => [...prevItems, ...data]);
      setIsLoading(false);
    };
    fetchData();
    console.log("SCROLL", page);
  }, [page]);

  return (
    <div className="flex-grow overflow-y-scroll">
      <div className="grid grid-cols-1 gap-1 image.png">
        {items.map((post) => (
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

export default MainFeed;
