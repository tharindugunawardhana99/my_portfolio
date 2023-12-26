import {  FaGithub, FaLinkedinIn, FaFacebook,FaDownload } from "react-icons/fa";

import cvFile from '../../assets/CV_Tharindu Gunawardhana.pdf';

const ContactRight = () =>{

    const handleDownloadCV = () => { 
        const link = document.createElement('a');
        link.href = cvFile;
        link.target = '_blank';
        link.download = 'cv.pdf';
        link.click();
      };

return(
        <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
              <h3 className="justify-center text-3xl font-bold text-white ">Tharindu Gunawardhana</h3>
              <p className="justify-center text-base tracking-wide text-gray-400">
                No - 455/A,
                Kiribathawila Watta,
                Baddegama
              </p>
              <p className="flex items-center justify-center gap-1 text-base text-gray-400 ">
                Phone: <span className="text-lightText">+94 774024368</span>
              </p>
              <p className="flex items-center justify-center gap-1 text-gray-400 sm:text-base xs:text-xs">
                Email: <span className="text-lightText">tharindugunawardhana99@gmail.com</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="justify-center mb-2 text-base uppercase font-titleFont ">Find me in</h2>
              <div className="flex justify-center gap-2 ">
                <a href='https://www.facebook.com/tharindu.gunawardhana.56?mibextid=9R9pXO' className="bannerIcon">
                    <FaFacebook />
                </a>
                <a href='https://github.com/tharindugunawardhana99' className="bannerIcon">
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/tharindu-gunawardhana-89a9b6214' className="bannerIcon">
                    <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-center gap-2 ">
                <button
                  className="inline-flex px-4 py-2 mb-4 text-base font-bold text-white uppercase rounded w-[200px] bannerIcon"
                  onClick={handleDownloadCV}
                >
                  <span className='mx-2'>Download CV</span><FaDownload />
                </button>
              </div>
            </div>
        </div>

    );

}

export default ContactRight;