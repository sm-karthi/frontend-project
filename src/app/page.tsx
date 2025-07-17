
import { ParticlesAnimation, MarqueAnimation, SideMenu } from '@/components';

export default function Home() {
  return (
    <div className=" h-screen pt-6 pb-1 px-5.5 overflow-x-hidden">


      <div className='flex flex-col justify-between h-full'>

        <div className="flex justify-between">


          <div className="flex flex-col space-y-6.5 text-[#adadad] text-xl">

            <div className="flex flex-col space-y-0.5">
              <p>Based in</p>
              <p className="underline">São Paulo, Brazil</p>
            </div>

            <div className="flex flex-col space-y-0.5">
              <p>Switch to</p>
              <p className="underline hover:text-white cursor-pointer">Light mode</p>
            </div>

          </div>



          <div className="flex flex-col space-y-6 max-w-sm mr-22">

            <div className="flex flex-col font-bold text-5xl mt-2 text-white text-center">
              <h1>Cesar</h1>
              <h1>oliveira</h1>
            </div>

            <div className="flex flex-col text-[#adadad] text-xl space-y-2 text-center">
              <p>A <span className="text-white text-2xl font-bold">Front-end Engineer </span>having</p>

              <p>fun crafting digital </p>

              <p>experiences</p>

            </div>

          </div>


          <SideMenu />



        </div>


        <div className='flex flex-col space-y-3'>

          <div className='flex justify-between text-[#adadad] text-xl items-center'>

            <p className='hover:underline hover:text-white cursor-pointer'>Latest posts ↓</p>


            {/* <div>
            <ParticlesAnimation />
          </div> */}

            <div className='flex flex-col space-y-0.5 text-end'>
              <p>Want to hire me?</p>
              <p className='underline hover:text-white cursor-pointer'>examplecontact@gmail.com</p>
            </div>

          </div>

          <MarqueAnimation />

        </div>


      </div>





    </div>
  );
}
