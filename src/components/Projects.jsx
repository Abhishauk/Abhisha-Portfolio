import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'ZAZZLE',
      description: 'A live Geolocation app for finding tweets and twitter users around you.',
      photo: '/zazzle.png',
      githubLink: 'https://github.com/Abhishauk/Zazzle',
    },
    {
      title: 'SmileUp',
      description: 'A video streaming app with live Geolocation, for streaming events.',
      photo: '/socialmedia.png',
      githubLink: 'https://github.com/Abhishauk/SmileUp',
    },
    {
      title: 'ToDoList',
      description: 'Mobile app for booking instant pickup & dropoff across major cities.',
      photo: '/todo.png',
      githubLink: 'https://github.com/Abhishauk/ToDoList',
    },
  ];

  return (
    <div className='bg-black flex flex-col items-center justify-center py-20 px-4 md:px-32' id='about'>
      <div className='py-20 px-32'>
        <h1 className='text-3xl text-pink-400 font-semibold'>Projects</h1>
        <p className='text-white mt-5'>
          I have worked on many projects over the course of being a web Developer, here are a few of my live, real-world projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center space-x-4">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:w-[343px] border border-white rounded-lg p-2 opacity-80 hover:opacity-100"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-pink-400 font-semibold text-lg">
                {project.title}
              </h3>
              <p className="text-white mt-1">{project.description}</p>
              <div className="flex items-center mt-5 justify-center">
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-pink-400"
                    fill="pink"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
