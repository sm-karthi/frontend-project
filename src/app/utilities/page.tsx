import { Header } from "@/components"
import Link from "next/link"

export default function Utilities() {
    return (
        <div className="h-screen pt-6 pb-1 px-5.5 overflow-x-hidden">

            <Header />

            <div className="text-[#adadad] space-y-10 mb-22 md:px-6 mt-10 text-3xl md:text-[45px]">

                <div>
                    <Link href={"https://www.linkedin.com/in/rajavasanthan/"} target="_blank" className="menuLink">Go to my Linkedin</Link>

                    <hr className="border-gray-700 mt-10 md:hidden" />
                </div>



                <div>
                    <Link href={"https://meet.google.com/landing"} target="_blank" className="menuLink">Book a meeting <span className="text-sm">
                        invite to {"->"} examplecontact@cesarolvr.com</span>
                    </Link>

                    <hr className="border-gray-700 mt-10 md:hidden" />
                </div>



                <div>
                    <Link href={"https://github.com/Rajavasanthan"} target="_blank" className="menuLink">See my Github</Link>

                    <hr className="border-gray-700 mt-10 md:hidden" />
                </div>



                <div className="menuLink">Star my Codepen</div>

                <hr className="border-gray-700 md:hidden" />



                <div className="menuLink">Check my Leetcode</div>

                <hr className="border-gray-700 md:hidden" />



                <div>
                    <Link href="mailto:examplecontact@cesarolvr.com" className="menuLink">Send me an e-mail</Link>

                    <hr className="border-gray-700 mt-10 md:hidden" />
                </div>



                <div className="menuLink">Follow me on Instagram <span className="text-sm">
                    (only friends)</span>
                </div>

                <hr className="border-gray-700 md:hidden" />



                <div className="menuLink">My current readings <span className="text-sm">
                    (only curious)</span>
                </div>

                <hr className="border-gray-700 md:hidden" />


            </div>





        </div>
    )
}