import React from "react"
import Image from "next/image"

const Sec6 = () => {
    return (
      <div>
        <div className="flex justify-center items-center w-30% min-h-screen bg-[#043873] bg-[url(/images/BACKGROUNDS.png)] bg-no-repeat ">
            <div className="relative  justify-center items-center md:items-start text-center md:text-left">
              <h1 className="relative font-bold text-white text-center text-[72px]">
              Your work, every where<span className="relative z-30"> you are</span>
                <Image
                src='/images/Vector.png'
                alt="dash"
                width={300}
                height={300}
                 className="absolute bottom-0 left-[72%] w-[250px] md:w-[400px] z-10"
                />
              </h1>
              <p className="font-normal text-white text-center mb-12">
              Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and <br/>OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
              </p>

          <div className="flex items-center justify-center ">

              <button className="bg-[#4F9CF9] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 transition-all duration-300">
                Try Taskey
                
                </button>
              </div>
              </div>
              </div>
              </div>
              
    )
}

export default Sec6;