import React from "react";
import Image from "next/image";
const Sec1 = () => {
  return (
    <div>
      <div className=" w-full h-screen flex items-center justify-center bg-[#ffffff]">
        <div className="w-[100%] bg-[url(/images/BACKGROUND.png)] bg-no-repeat flex justify-center">
          <div className="w-[90%] flex flex-col md:flex-row items-center justify-center  ">
            <div className='flex md:flex-none flex-col justify-center items-center md:items-start text-center md:text-left'>
              <h1 className="md:text-[72px] text-[36px] mb-4 text-black font-bold justify-between">
                Project <br /> Management
                <Image
                 alt='Dash'
                 src="/images/B-Dash.png"
                 width={482.21}
                 height={29}

                 />
              </h1>
              <p className="text-black mb-4">
                Images, videos, PDFs and audio files are supported.Create math 
                expressions and <br/>diagrams directly from  the app. Take
                photos with the mobile app and save them <br/>to a note.
              </p>
              <button className="flex gap-2 items-center font-medium px-[40px] py-[20px] md:mt-0 mt-10 rounded-lg bg-[#4F9CF9]">
                Get Started 
                <Image
                alt="error"
                src="/images/Icon.png"
                width={14}
                height={14}
                />
              </button>
            </div>
            <div className="md:w-[500px] md:h-[350px] w-[350px] h-[200px] mt-20 md:mt-0 bg-[#C4DEFD]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec1;