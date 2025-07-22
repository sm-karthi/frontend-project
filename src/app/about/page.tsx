"use client"

import {
    Header, CopyBioBtn, Career, Academy,
    OpenSource, Volunteering, Hacking
} from "@/components"

import image from "../../../public/images/image2.png"
import GridsAndGuides from "../../../public/images/gridsAndGuides.png"
import eachOneTeachOne from "../../../public/images/eachOneTeachOne.png"
import interviewLama from "../../../public/images/interview-lama.png"

import { useState } from "react";
import Link from "next/link"

const bioText =
    `I am a devoted technology enthusiast and mentor with a profound passion for software development. In my daily interactions, I engage with a diverse array of students, always eager to impart my knowledge and share my experiences. As the founder of Grids and Guides, a forward-thinking company dedicated to empowering individuals to harness technology in innovative and meaningful ways, I am committed to fostering a culture of continuous learning and growth.

Beyond my role as a mentor and entrepreneur, I take pride in spearheading the Each One Teach One community—a dynamic network aimed at connecting individuals who share a common dedication to exchanging skills and expertise. My journey is fueled by an unwavering desire to make a positive impact on the world through the transformative power of technology.

With a keen focus on collaboration, I am constantly seeking new opportunities to join forces with like-minded individuals, driven by the shared goal of making a meaningful difference. Through my work, I aspire to contribute to the ever-evolving landscape of technology and inspire others to embrace the ethos of Each One Teach One.

Join me on this exciting journey of perpetual learning, growth, and impactful contributions to the world through the realm of technology.`;



export default function About() {

    const [title, setTitle] = useState("career");

    return (
        <div className="h-screen pt-6 pb-1 px-5.5 overflow-x-hidden">

            <Header />


            <div className="flex flex-col md:flex-row justify-center md:justify-start w-full space-x-28 mt-6  text-[#adadad] text-sm md:text-xl">

                <div className="mt-2 w-full md:w-[40%]">
                    <img src={image.src} alt="image" draggable={false}></img>

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

                    <h2 className="bg-[#3a3a3a] mt-8 h-fit py-0.5 font-bold text-white w-fit mb-3">Founder of</h2>

                    <div className="flex justify-between flex-wrap mt-8 gap-8">

                        <Link href={"https://gridsandguides.com/"} target="_blank">
                            <img src={GridsAndGuides.src} alt="Grids and Guides" className="h-22" />
                        </Link>

                        <Link href={"https://eachoneteachone.co.in/"} target="_blank">
                            <img src={eachOneTeachOne.src} alt="Each one Teach one" className="h-22" />
                        </Link>

                        <Link href={"https://vaathiyar.ai/"} target="_blank">
                            <img src={interviewLama.src} alt="Interview lama" className="h-22" />
                        </Link>

                    </div>



                    <div className="flex space-x-6 mt-10 md:mt-20 text-sm md:text-lg text-nowrap md:overflow-x-hidden overflow-x-scroll">

                        <p className={`hover:underline dura hover:text-white cursor-pointer 
                            ${title === "career" ? 'underline text-white' : ''}`}
                            onClick={() => setTitle("career")}>
                            Career
                        </p>

                        <p className={`hover:underline dura hover:text-white cursor-pointer 
                            ${title === "academy" ? 'underline text-white' : ''}`}
                            onClick={() => setTitle("academy")}>
                            Academy
                        </p>

                        <p className={`hover:underline dura hover:text-white cursor-pointer 
                            ${title === "openSource" ? 'underline text-white' : ''}`}
                            onClick={() => setTitle("openSource")}>
                            Open Source
                        </p>

                        <p className={`hover:underline dura hover:text-white cursor-pointer 
                            ${title === "volunteering" ? 'underline text-white' : ''}`}
                            onClick={() => setTitle("volunteering")}>
                            Volunteering
                        </p>

                        <p className={`hover:underline dura hover:text-white cursor-pointer 
                            ${title === "hacking" ? 'underline text-white' : ''}`}
                            onClick={() => setTitle("hacking")}>
                            Hacking
                        </p>

                    </div>

                    <div className="mt-12 md:w-[80%] text-sm md:text-lg mb-10">

                        {
                            title === "career" && <Career />
                        }

                        {
                            title === "academy" && <Academy />
                        }

                        {
                            title === "openSource" && <OpenSource />
                        }

                        {
                            title === "volunteering" && <Volunteering />
                        }

                        {
                            title === "hacking" && <Hacking />
                        }
                    </div>

                </div>

            </div>





        </div>
    )
}