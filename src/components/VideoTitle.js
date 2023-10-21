import React from "react";

const VideoTitle = ({ title, overview }) => {
   return (
      <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-1/3 aspect-video">
         <div className="text-6xl font-bold">{title}</div>
         <div className="py-6 text-lg">{overview}</div>
         <div className="flex flex-wrap">
            <button className="bg-white text-black p-4 px-4 rounded-lg mr-5 m-2 text-md hover:bg-opacity-80">
               ▶️ Play Now
            </button>
            <button className="bg-gray-600 p-4 px-4 rounded-lg m-2 text-md bg-opacity-50">
               More overview
            </button>
         </div>
      </div>
   );
};

export default VideoTitle;
