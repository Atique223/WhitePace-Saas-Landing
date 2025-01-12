import React from "react"
import Image from "next/image"

const Sec10 = () => {
    return (
      <div>
        <div className="flex justify-center items-center w-30% min-h-screen bg-white">
            <div className="relative  justify-center items-center md:items-start text-center md:text-left">
              <h1 className="relative font-bold text-black text-center mb-20 text-[72px]">
              Whats Our Clients<span className="relative z-30"> Says</span>
                <Image
                src='/images/Group.png'
                alt='error'
                width={328}
                height={42}
                 className="absolute bottom-0 left-[63%]  z-10"
                />
              </h1>
              <div className="flex  gap-28 mb-8">
                <Image
                src='/images/Cliente.png'
                alt='error'
                width={471}
                height={498}
                />
                <Image
                src='/images/Clients.png'
                alt='error'
                width={471}
                height={498}
                />
                <Image
                src='/images/Client.png'
                alt='error'
                width={471}
                height={498}
                />
                
              </div>
              <div className="flex justify-center">
                    <Image
                    src='/images/Slider.png'
                    alt='error'
                    width={60}
                    height={14}
                   />
                   </div>
            </div>
        </div>
      </div>
    )
}
export default Sec10;