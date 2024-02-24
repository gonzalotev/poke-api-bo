'use client'
import Image from "next/image";
import LoadingImage from "/public/pokeball-loader.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src={LoadingImage} 
        alt="Loading"
        className="animate-spin h-24 w-24"
      />
    </div>
  );
};

export default Loading;