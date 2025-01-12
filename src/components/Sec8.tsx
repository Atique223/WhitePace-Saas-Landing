import React from "react"
import Image from "next/image"

const Sec8 = () => {
    return (
      <div>
        <div className="flex justify-center items-center w-30% min-h-screen bg-white">
            <div className="relative  justify-center items-center md:items-start text-center md:text-left">
              <h1 className="relative font-bold text-black text-center mb-20 text-[72px]">
              Our<span className="relative z-30"> sponsors</span>
                <Image
                src='/images/Elemente.png'
                alt='error'
                width={328}
                height={42}
                 className="absolute bottom-0 left-[43%]  z-10"
                />
              </h1>
              <div className="flex  gap-40">
                <Image
                src='/images/Apple.png'
                alt='error'
                width={55}
                height={68}
                />
                <Image
                src='/images/Microsoft.png'
                alt='error'
                width={287}
                height={62}
                />
                <Image
                src='/images/Slack.png'
                alt='error'
                width={280}
                height={71}
                />
                <Image
                src='/images/Google.png'
                alt='error'
                width={200}
                height={50}
                />
              </div>
            </div>
        </div>
      </div>
    )
}
export default Sec8;