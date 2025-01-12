import React from 'react'
import Image from 'next/image'
const Sec9 = () => {
  return (
    <div>
        <div className='w-full h-screen flex items-center justify-center bg-[#043873] bg-[url(/images/Element.png)] bg-no-repeat'>
            <div className='relative w-[90%] flex flex-col-reverse md:flex-row justify-evenly items-center'>
                <div>
                  <Image
                  src='/images/Apps.png'
                  alt='error'
                  width={500}
                  height={491}
                  className='mt-10'
                  />
                </div>
                <div className='md:w-[527px] md:h-[314] text-white flex flex-col text-justify-center md:items-start items-center mb-10'>
                  <h1 className='relative font-bold md:text-[64px] text-[34px] my-6 z-20'>Work with Your Favorite Apps Using whitepace
                 
                  </h1>
                  <p className='font-normal flex flex-col text-center md:items-start items-center mb-10'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
                  <button className='flex  gap-2 items-center font-medium px-[40px] py-[20px] rounded-lg bg-[#4F9CF9] text-white mt-10'>Read more  
                  <Image
                    src='/images/Icon.png'
                    alt='right'
                    width={14}
                    height={14}
                    />

                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec9 