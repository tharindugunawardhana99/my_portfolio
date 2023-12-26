import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

import { useMediaQuery } from '@react-hook/media-query';


const Experience = () => {
  const isScreenMd = useMediaQuery('(min-width: 667px)');
  console.log("isScreenMd",isScreenMd)
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div >
        <div className="flex flex-col gap-2 py-4 lgl:py-12 font-titleFont">
          {/*<p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
  <h2 className="text-3xl font-bold md:text-4xl">Education Quality</h2>*/}
        </div>
        <div className="mt-6 lgl:mt-14 max-md:w-[85%] md:w-[45%] md:h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 relative md:left-[50%]">
          <ResumeCard
            title="Working as a software engineer intern"
            subTitle="LinearSix (Pvt) Ltd, Colombo (2023-October to Present)"
            result=""
            des=""
          />
          <ResumeCard
            className="inherit calculated-width"
            left={true}
            title="Worked as an Intern"
            subTitle="Peoples Bank, Galle (2020)"
            result=""
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Experience