import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FitZen"
          des="A comprehensive fitness management system featuring online workout sessions via video-calling, progress tracking, shake-bar facility, maintain personal workout schedules and other features as well."
          src={projectOne}
          git="https://github.com/FitZen/fitzen"
        />
        <ProjectsCard
          title="StudentCare"
          des="All-in-one student support web platform featuring an exclusive student community, free counseling sessions by industry professionals via secure video-calling, and options to find nearby food and utility."
          src={projectTwo}
          git="https://github.com/O-sura/Project_StudentCare"
        />
        <ProjectsCard
          title="Task Tracker"
          des=" A simple task-tracking web application. This is developed as a self learning project. You will be able to track your day-today tasks and manage your personal schedules using this."
          src={projectThree}
          git="https://github.com/tharindugunawardhana99/tast-tracker"
        />
        <ProjectsCard
          title="DiceRush"
          des="Simple dice rolling game which can play two players. The
          player who reaches first to the winning score wins the
          game."
          src={projectFour}
          git="https://github.com/tharindugunawardhana99/RAD-SCS2208-DIce-Rolling-Game"
        />
      </div>
    </section>
  );
}

export default Projects