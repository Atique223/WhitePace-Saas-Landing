import React from 'react';
import Image from 'next/image';

const Sec7 = () => {
  return (
    <div>
      <div className=" w-full h-screen flex items-center justify-center bg-[#ffffff]">
        <div className="w-full flex justify-center">
          <div className="w-[90%] flex flex-col md:flex-row items-center justify-center  ">
            <div className="flex md:flex-none flex-col justify-center items-center md:items-start text-center md:text-left">
              <h1 className="md:text-[72px] text-[36px] mb-4 text-black font-bold justify-between">
              100%  your data 
                <Image
                 alt="Dash"
                 src="/images/B-Dash.png"
                 width={382.03}
                 height={30}
                 />
              </h1>
              <p className="text-black mb-4">
              The app is open source and your notes are saved to an open format, so you all always have access<br/> to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but<br/> yourself can access them.
              </p>
              <button className="flex gap-2 items-center text-white font-medium px-[40px] py-[20px] md:mt-0 mt-10 rounded-lg bg-[#4F9CF9]">
              Read more
                <Image
                alt="error"
                src="/images/Icon.png"
                width={14}
                height={14}
                />
              </button>
            </div>
            <Image
                  src="/images/Elements.png"
                  alt="error"
                  width={500}
                  height={491}
                  className="mt-10"
                  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec7;