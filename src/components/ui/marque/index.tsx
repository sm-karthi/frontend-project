"use client";

import { useBlogsData } from "@/hooks/useBlogsData";
import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";

export function MarqueAnimation() {

    const blogsData = useBlogsData().sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("/"));
        const dateB = new Date(b.date.split("/").reverse().join("/"));
        return dateB.getTime() - dateA.getTime();
    });


    useEffect(() => {

        const box = document.querySelector(".marqueBox");
        if (!box) return;

        const boxWidth = box.scrollWidth;
        const viewWidth = window.innerWidth;

        const animation = gsap.fromTo(box,
            { x: 10 },
            {
                x: viewWidth - boxWidth,
                duration: 22,
                repeat: -1,
                yoyo: true,
                ease: "linear",
            }
        );


        box.addEventListener("mouseenter", () => animation.pause());
        box.addEventListener("mouseleave", () => animation.resume());

    }, []);



    return (

        <div className="flex gap-1.5 marqueBox whitespace-nowrap">

            {blogsData.map((blog) => (

                <Link key={blog.id} href={`/blog/${blog.fileName}`}>

                    <p className="marque">{blog.title.slice(0, 45)}... {"->"}</p>

                </Link>

            ))}

        </div>
    );
}
