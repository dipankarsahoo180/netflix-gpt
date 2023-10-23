import React from "react";

const VideoTitle = ({ title, overview }) => {
   return (
      <div
         className="w-1/3 pt-[18%] px-24 absolute text-white from-black aspect-video max-sm:w-full max-sm:px-2 max-sm:mt-36 max-sm:bg-black  
      max-lg:w-full max-lg:pt-[15%] custom-responsive-design"
      >
         <div className="text-6xl font-bold max-md:w-screen max-lg:px-2">
            {title}
         </div>
         <div className="py-6 text-lg">{overview}</div>
         <div className="flex flex-wrap min-md:w-full">
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
