import { Header } from "@/components"

export default function Blog() {
    return (
        <div className="h-screen pt-6 pb-1 px-5.5 overflow-x-hidden">

            <Header />


            <div className="md:mt-8 mt-14 text-[#adadad]">

                <h1 className="font-bold text-white text-[48px] md:text-[55px] md:ml-12">Ideas. Opinions. Daydreams.</h1>

                <p className="mt-6 md:ml-12 text-lg md:text-xl w-full leading-8 md:w-[70%]">Written by me, for my future self. You will find here an honest (and sometimes wrong) view of front-end, tech career, algorithms, creative development, study strategies and technical leadership.</p>


                <div className="mt-16">    

                    <div className="py-8 md:px-4 w-full border-b border-gray-700 hover:bg-white hover:text-black duration-150 cursor-pointer">

                        <h2 className="font-bold ml-6 text-lg md:text-2xl">⚡075. Supabase is great and charges you for it</h2>

                        <p className="text-[#6f6f6f] ml-14 mt-2 text-md md:text-lg">Will be published soon...</p>

                        <p className="ml-14 text-md md:text-lg mt-6">Go to the last published {"->"}</p>

                    </div>


                    <div className="py-8 md:px-4 w-full border-b border-gray-700 hover:bg-white hover:text-black duration-150 cursor-pointer">

                        <h2 className="font-bold ml-6 text-lg md:text-2xl">🎯 Starting with Object-Oriented Programming</h2>

                        <p className="text-[#6f6f6f] ml-14 mt-2 text-md md:text-lg">Will be published soon...</p>

                        <p className="ml-14 text-md md:text-lg mt-6">Go to the last published {"->"}</p>

                    </div>



                    <div className="py-8 md:px-4 w-full border-b border-gray-700 hover:bg-white hover:text-black duration-150 cursor-pointer">

                        <h2 className="font-bold ml-6 text-lg md:text-2xl">🗄️ The Boring Side of Modelling Databases</h2>

                        <p className="text-[#6f6f6f] ml-14 mt-2 text-md md:text-lg">Will be published soon...</p>

                        <p className="ml-14 text-md md:text-lg mt-6">Go to the last published {"->"}</p>

                    </div>



                    <div className="py-8 md:px-4 w-full border-b border-gray-700 hover:bg-white hover:text-black duration-150 cursor-pointer">

                        <h2 className="font-bold ml-6 text-lg md:text-2xl">🗼 The analogy of the tower of Hanoi to programming</h2>

                        <p className="text-[#6f6f6f] ml-14 mt-2 text-md md:text-lg">Will be published soon...</p>

                        <p className="ml-14 text-md md:text-lg mt-6">Go to the last published {"->"}</p>

                    </div>

                </div>

            </div>





        </div>
    )
}