import React from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import MainFeed from "../views/MainFeed";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen max-h-screen bg-zinc-200">
      <div className="flex flex-col min-h-screen max-h-screen bg-amber-300">
        <Header />
        <MainFeed />
        <Footer />
      </div>
    </div>
  );
}
