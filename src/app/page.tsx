
import { ParticlesAnimation, MarqueAnimation, SideMenu } from '@/components';

export default function Home() {
  return (
    <div className=" h-screen pt-6 pb-1 px-5.5 overflow-x-hidden">


      <div className='flex flex-col justify-between h-full'>

        <div className="flex justify-between">


          <div className="flex flex-col space-y-6.5 text-[#adadad] text-sm md:text-xl">

            <div className="flex flex-col space-y-0.5">
              <p>Based in</p>
              <p className="underline">São Paulo, Brazil</p>
            </div>

            <div className="flex flex-col space-y-0.5">
              <p>Switch to</p>
              <p className="underline duration-150 hover:text-white cursor-pointer w-fit">Light mode</p>
            </div>

          </div>


          {/* Laptop screen  */}
          <div className="flex-col md:flex space-y-6 mr-22 hidden">

            <div className="flex flex-col font-bold text-5xl mt-2 text-white text-center">
              <h1>Rajavasanthan</h1>
              
            </div>

            <div className="flex flex-col text-[#adadad] text-sm md:text-xl max-w-md space-y-2 text-center">
              <p className=' leading-9'>A <span className="text-white text-md md:text-2xl font-bold">Tech Enthusiast, Entreprenur, Mentor </span>having fun crafting digital experiences</p>

            </div>

          </div>


          <SideMenu />

        </div>


        {/* Mobile screen  */}
        <div className="flex flex-col md:hidden space-y-6">

          <div className="flex flex-col font-bold text-4xl mt-2 text-white text-center">
            <h1>Rajavasanthan</h1>
          </div>

          <div className="flex flex-col text-[#adadad] text-sm space-y-2 text-center">
            <p>A <span className="text-white text-xl font-bold">Tech Enthusiast, Entreprenur, Mentor </span>having</p>

            <p>fun crafting digital </p>

            <p>experiences</p>

          </div>

        </div>



        <div className='flex flex-col space-y-3'>

          <div className='flex justify-between text-[#adadad] text-sm md:text-xl items-center'>

            <p className='hover:underline duration-150 hover:text-white cursor-pointer'>Latest posts ↓</p>


            <div>
              <ParticlesAnimation />
            </div>

            <div className='flex flex-col space-y-0.5 text-end'>
              <p>Want to hire me?</p>
              <p className='underline duration-150 hover:text-white cursor-pointer'>examplecontact@gmail.com</p>
            </div>

          </div>

          <MarqueAnimation />

        </div>


      </div>





    </div>
  );
}
