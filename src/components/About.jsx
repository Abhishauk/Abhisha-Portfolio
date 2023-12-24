import React from "react";

const About = () => {
  const skills = [
    { name: "MongoDB", image: "/MongoDB.png" },
    { name: "Express.js", image: "/Express.png" },
    { name: "React.js", image: "/React.png" },
    { name: "Node.js", image: "/Nodejs.png" },
    { name: "JS", image: "/JS.png" },
    { name: "HTML", image: "/HTML.png" },
    { name: "CSS", image: "/CSS.png" },
    { name: "Tailwind", image: "/Tailwind.png" },
    { name: "API", image: "/API.png" },
    { name: "Json", image: "/Json.png" }
  ];

  return (
    <div
      className="bg-black flex flex-col items-center justify-center py-20 px-4 md:px-32"
      id="about"
    >
      <div className="py-20 px-32">
        <h1 className="text-3xl text-pink-400 font-semibold">About Me</h1>
        <p className="text-white mt-5">
          Hello, I'm a MERN stack developer. I specialize in MongoDB for
          databases, Express.js for server-side logic, React.js for dynamic
          front-end interfaces, and Node.js for server-side JavaScript. I'm
          passionate about crafting efficient web applications and thrive in
          collaborative, innovative environments. Let's build something great
          together!
        </p>
      </div>

      <div className="flex mt-10  py-20 px-32">
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-[160px] bg-light hover:bg-pink-400 flex flex-col items-center justify-center p-3 border border-white rounded-lg shadow-sm transition-all duration-500 mr-2 mb-2"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 object-cover mb-2"
              />
              <p className="text-sm mt-2 text-white font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
