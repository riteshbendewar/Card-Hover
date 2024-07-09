import * as React from "react";
import pink from './assets/group_work_40dp_FILL0_wght400_GRAD0_opsz40 1.png'
import blue from './assets/hotel_class_24dp_FILL0_wght400_GRAD0_opsz24 (1) 3.png'
 import yello from './assets/carbon_software-resource-cluster.png'
 import black from './assets/school_24dp_FILL0_wght400_GRAD0_opsz24 1.png'


export default function MyComponent() {
  return (
    <div className="flex flex-col px-5">

        <div className="self-center mt-16 text-3xl font-semibold text-center text-black max-md:max-w-full">

        Discover the ultimate Learning Experience for Your Educational Journey
      </div>
      <div className="self-center mt-1.5 text-2xl font-light text-center text-black w-[620px] max-md:max-w-full">
         tailored to meet your unique learning needs and goals
         Unlock the access from our exceptional features
      </div>
      
      <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex   justify-center gap-10 max-md:flex-col max-md:gap-0">
          <div className="flex    flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex  flex-col grow px-6 py-4 w-full text-black border-gradient max-md:px-5 max-md:mt-7">
              <img
                loading="lazy"
                src={blue}
                 className="w-10 "
              />
              <div className="mt-2  text-lg font-semibold">Expert Mentor</div>
              <div className="mt-2  text-base">
                Specialized learning guidances <span >  to enhance the learning </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-4 w-full text-black border-gradient bg-white bg-opacity-60 max-md:px-5 max-md:mt-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d2097de8aeef63a4c88eb61152802db2b6910fb262f85aa0605cae736638623?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                className="w-10 "
              />
              <div className="mt-2 text-lg font-semibold">
                Personalized learning path
              </div>
              <div className="mt-2 text-base">
                A personalized learning path tailored to educational content
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-4 w-full  bg-white bg-opacity-60 border-gradient max-md:px-5 max-md:mt-7">
              <div className="flex justify-center items-center px-1 w-10 h-10 bg-white rounded-3xl border border-purple-400 border-solid">
                <img
                  loading="lazy"
                  src={pink}
                   className="w-full "
                />
              </div>
              <div className="mt-2 text-lg font-semibold text-black">
                Workshop
              </div>
              <div className="mt-2 text-base text-black">
                Practical training on a specific topic or a skill
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full max-md:max-w-full">
        <div className="flex justify-center gap-10 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-4 w-full  bg-white bg-opacity-60 border-gradient max-md:px-5 max-md:mt-7">
              <div className="flex justify-center items-center px-3 w-10 h-10 bg-white rounded-3xl border border-lime-500 border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcbcadbca90e959d6289c6e428b5a6b451c885e09b27e618067b7cf3fbf0fd8e?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                  className="w-full aspect-[1.3] fill-lime-500"
                />
              </div>
              <div className="mt-2 text-lg font-semibold text-black">
                Mentorship
              </div>
              <div className="mt-2 text-base text-black">
                Gain Personalized mentorship from industry experts
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-4 w-full  bg-white bg-opacity-60 border-gradient max-md:px-5 max-md:mt-7">
              <div className="flex justify-center items-center px-2 w-10 h-10 bg-white rounded-3xl border border-yellow-500 border-solid">
                <img
                  loading="lazy"
                  src={yello}
                   className="w-full aspect-square fill-yellow-500"
                />
              </div>
              <div className="mt-2 text-lg font-semibold text-black">
                Resource Library
              </div>
              <div className="mt-2 text-base text-black">
                Utilize a rich library of learning materials and resources
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-4 w-full  bg-white bg-opacity-60 border-gradient max-md:px-5 max-md:mt-7">
              <div className="flex justify-center items-center px-2.5 w-10 h-10 bg-white rounded-3xl border border-black border-solid">
                <img
                  loading="lazy"
                  src={black}
                   className="w-full aspect-[1.22] fill-black"
                />
              </div>
              <div className="mt-2 text-lg font-semibold text-black">
                Career Services
              </div>
              <div className="mt-2 text-base text-black">
                Access career coaching and job placement assistance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


