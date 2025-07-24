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

    const len = blogsData.length * 480


    useEffect(() => {

        const animation = gsap.fromTo(".marqueBox",
            { x: 300 },
            {
                x: -len,
                duration: 25,
                repeat: -1,
                yoyo: true,
                ease: "none",
            }
        );

        const marqueElements = document.querySelectorAll(".marque");

        marqueElements.forEach((element) => {

            element.addEventListener("mouseenter", () => {
                animation.pause();
            });

            element.addEventListener("mouseleave", () => {
                animation.resume();
            });

        });


    }, []);





    return (

        <div className="flex gap-1.5 marqueBox">

            {
                blogsData.map((blog) => (
                    <Link key={blog.id} href={`/blog/${blog.fileName}`}>
                        <p className="marque">{blog.title.slice(0, 50)}... {"->"}</p>
                    </Link>
                ))
            }


        </div>

    );
}
