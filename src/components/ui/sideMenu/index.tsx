"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideMenu() {

    const pathName = usePathname();


    return (
        <div className="flex flex-col items-end text-end space-y-3.5 text-sm md:text-xl text-[#adadad]">

            <Link href={"/about"} className={`menuLink ${pathName.includes("/about") ?
                'underline text-white' : ''}`}>About</Link>

            <Link href={"/blog"} className={`menuLink ${pathName.includes("/blog") ?
                'underline text-white' : ''}`}>Blog</Link>

            <Link href={"https://github.com/Rajavasanthan"} target="_blank" className="menuLink">Experiments</Link>

            <Link href={"utilities"} className={`menuLink ${pathName.includes("/utilities") ?
                'underline text-white' : ''}`}>Utilities</Link>

        </div>
    )
}