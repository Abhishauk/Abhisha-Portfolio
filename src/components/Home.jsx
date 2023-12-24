import React from 'react';

const Home = () => {
  return (
    <div className="bg-black">
      <div className=" flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-32">
        <div className="text-center md:text-left md:mr-72">
          <h6 className="text-3xl text-white">HI, I'M</h6>
          <h1 className="font-semibold text-3xl md:text-5xl my-4 text-white">ABHISHA UK</h1>
          <p className="md:w-96 text-pink-400">MERN STACK DEVELOPER</p>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="profile-pic.jpg"
            alt="Profile Picture"
            className="rounded-full w-72 h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
