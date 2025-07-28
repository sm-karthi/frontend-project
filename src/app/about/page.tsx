
import { Header, CopyBioBtn } from "@/components"

import image from "../../../public/images/image2.png"
import GridsAndGuides from "../../../public/images/gridsAndGuides.png"
import eachOneTeachOne from "../../../public/images/eachOneTeachOne.png"
import vaathiyarAi from "../../../public/images/vaathiyar-ai.png"

import linkedinIcon from '../../../public/images/linkedin-icon.png'
import githubIcon from '../../../public/images/github-icon.png'

import Link from "next/link"
import { Metadata } from "next"

const bioText =
    `I am a devoted technology enthusiast and mentor with a profound passion for software development. In my daily interactions, I engage with a diverse array of students, always eager to impart my knowledge and share my experiences. As the founder of Grids and Guides, a forward-thinking company dedicated to empowering individuals to harness technology in innovative and meaningful ways, I am committed to fostering a culture of continuous learning and growth.

Beyond my role as a mentor and entrepreneur, I take pride in spearheading the Each One Teach One community—a dynamic network aimed at connecting individuals who share a common dedication to exchanging skills and expertise. My journey is fueled by an unwavering desire to make a positive impact on the world through the transformative power of technology.

With a keen focus on collaboration, I am constantly seeking new opportunities to join forces with like-minded individuals, driven by the shared goal of making a meaningful difference. Through my work, I aspire to contribute to the ever-evolving landscape of technology and inspire others to embrace the ethos of Each One Teach One.

Join me on this exciting journey of perpetual learning, growth, and impactful contributions to the world through the realm of technology.`;


export const metadata: Metadata = {
    title:"About"
}



export default function About() {

    return (
        <div className="h-screen pt-6 pb-1 px-5.5 overflow-x-hidden">

            <Header />


            <div className="flex flex-col md:flex-row justify-center w-full space-x-28 mt-18 text-[#adadad] text-sm md:text-xl mx-auto">

                <div className="mt-2 w-full md:w-[40%]">

                    <img src={image.src} alt="image" className="w-full" draggable={false}></img>

                    <div className="flex space-x-4 md:space-x-6 justify-end items-center mt-6 mr-4">


                        <Link href={"https://www.linkedin.com/in/rajavasanthan/"} target="_blank">
                            <img src={linkedinIcon.src} alt="Linkedin Icon" draggable="false" className="md:h-10 h-6" />
                        </Link>

                        <Link href={"https://github.com/Rajavasanthan"} target="_blank">
                            <img src={githubIcon.src} alt="Linkedin Icon" draggable="false" className="md:h-10 h-6" />
                        </Link>


                    </div>

                </div>


                <div className="md:w-[50%]">

                    <div className="space-y-6 mt-10 md:mt-0 flex flex-col">

                        <div className="space-y-4 flex flex-col">

                            <h2 className="font-bold text-white">Bio</h2>

                            <p className="text-[#adadad] text-sm md:text-lg leading-7 md:leading-10 whitespace-pre-wrap">
                                {bioText}
                            </p>

                        </div>


                        <div className="text-sm md:text-[16px]">

                            <CopyBioBtn textToCopy={bioText} />

                        </div>

                    </div>



                    <h2 className="mt-8 font-bold text-white mb-3">Founder of</h2>

                    <div className="flex justify-center md:justify-between flex-wrap mt-8 gap-8 mb-20">


                        <Link href={"https://gridsandguides.com/"} target="_blank">

                            <div className="bg-gray-200 h-34 w-34 rounded-full flex items-center justify-center">

                                <img src={GridsAndGuides.src} alt="Grids and Guides" draggable="false" className="h-18" />

                            </div>


                        </Link>


                        <Link href={"https://www.youtube.com/@EachOneTeachOne"} target="_blank">

                            <div className="bg-gray-200 h-34 w-34 rounded-full flex items-center justify-center">

                                <img src={eachOneTeachOne.src} alt="Each one Teach one" draggable="false" className="h-22" />

                            </div>


                        </Link>


                        <Link href={"https://vaathiyar.ai/"} target="_blank">

                            <div className="bg-gray-200 h-34 w-34 p-0.5 rounded-full flex items-center justify-center">

                                <img src={vaathiyarAi.src} alt="Vaathiayr.Ai" draggable="false" className="" />

                            </div>



                        </Link>

                    </div>

                </div>

            </div>


        </div>
    )
}