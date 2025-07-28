import { Header, BlogTitleAndDes } from "@/components"
import { Metadata } from "next"

export const metadata: Metadata = {
    title:"Blog"
}


export default function Blog() {
    return (
        <div className="h-screen pt-6 pb-1 px-5.5 overflow-x-hidden">

            <Header />


            <div className="md:mt-18 mt-14 text-[#adadad]">

                <h1 className="font-bold text-white text-[48px] md:text-[55px] md:ml-12">Ideas. Opinions. Daydreams.</h1>

                <p className="mt-6 md:ml-12 text-lg md:text-xl w-full leading-8 md:w-[70%]">Written by me, for my future self. You will find here an honest (and sometimes wrong) view of front-end, tech career, algorithms, creative development, study strategies and technical leadership.</p>


                <div className="mt-16 mb-20">

                    <BlogTitleAndDes />

                </div>

            </div>





        </div>
    )
}