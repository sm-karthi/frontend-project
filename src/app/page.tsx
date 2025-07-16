

export default function Home() {
  return (
    <div className="bg-[#222222] h-screen py-6 px-5.5 ">


      <div className="flex justify-between">


        <div className="flex flex-col space-y-6.5 text-[#adadad] text-xl">

          <div className="flex flex-col space-y-0.5">
            <p>Based in</p>
            <p className="underline">São Paulo, Brazil</p>
          </div>

          <div className="flex flex-col space-y-0.5">
            <p>Switch to</p>
            <p className="underline">Light mode</p>
          </div>

        </div>



        <div className="flex flex-col space-y-6  max-w-sm mr-22">

          <div className="flex flex-col font-bold text-5xl mt-2  text-white text-center">
            <h1>Cesar</h1>
            <h1>oliveira</h1>
          </div>

          <div className="flex flex-col text-[#adadad] text-xl space-y-2 text-center">
            <p>A <span className="text-white text-2xl font-bold">Front-end Engineer </span>having</p>

            <p>fun crafting digital </p>

            <p>experiences</p>

          </div>

        </div>



        <ul className="flex flex-col text-end space-y-3.5 text-xl text-[#adadad]">

          <li className="hover:underline hover:text-white cursor-pointer">About</li>
          <li className="hover:underline hover:text-white cursor-pointer">Blog</li>
          <li className="hover:underline hover:text-white cursor-pointer">Experiments</li>
          <li className="hover:underline hover:text-white cursor-pointer">Utilities</li>

        </ul>


      </div>

    </div>
  );
}
