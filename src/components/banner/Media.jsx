import React from 'react'
import { FaFacebookF, FaGithub, FaDownload, FaLinkedinIn } from "react-icons/fa";

import cvFile from '../../assets/CV_Tharindu Gunawardhana.pdf'; 

const Media = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.target = '_blank';
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          {/* <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2> */}
          <div className="flex gap-4">
            <a href='https://www.facebook.com/tharindu.gunawardhana.56?mibextid=9R9pXO' className="bannerIcon">
              <FaFacebookF />
            </a>
            <a href='https://github.com/tharindugunawardhana99' className="bannerIcon">
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/tharindu-gunawardhana-89a9b6214' className="bannerIcon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
        <div className="flex-row justify-center gap-4">
          <button
            className="inline-flex px-4 py-2 mb-4 text-base font-bold text-white uppercase rounded w-[200px] bannerIcon"
            onClick={handleDownloadCV}
          >
            <span className='mx-2'>Download CV</span><FaDownload />
          </button>
        </div>
        </div>
      </div>
  )
}

export default Media