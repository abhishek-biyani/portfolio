import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a1926] text-gray-300 py-20'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='text-center md:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 flex items-center'>
            <div className='text-center md:text-right text-4xl font-bold'>
              <p>Greetings! I'm <span className='text-[#dbab00]'>Abhishek Biyani</span>, where Coding meets Creativity, check out my projects!</p>
            </div>
            <div className='md:text-left sm:text-center lg:text-left xl:text-left xs:text-center'>
              <p>From designing visuals to building scalable web apps, I’ve evolved into a developer who loves merging art with algorithms. I work at Zensar Technologies, engineering smart, efficient systems using React.js, ASP.NET, and AWS, while mentoring developers as a Teaching Assistant at Internshala. With a solid base in Data Structures & Algorithms and a creative mindset, I strive to build digital experiences that are as elegant as they are effective.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
