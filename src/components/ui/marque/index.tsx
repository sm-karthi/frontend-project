"use client";

import gsap from "gsap";
import { useEffect } from "react";

export function MarqueAnimation() {

    useEffect(() => {
        
       const animation = gsap.fromTo(".marqueBox",
            { x: 200 },
            {
                x: -2400,
                duration: 20,
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

            <p className="marque">🌐 Networking is not that easy {"->"}</p>

            <p className="marque">🐘 First contact with PHP {"->"}</p>

            <p className="marque">🎯 Starting with Object-Oriented Programming {"->"}</p>

            <p className="marque">🗄️ The Boring Side of Modelling Databases {"->"}</p>

            <p className="marque">☕ Why (not) start with Java? {"->"}</p>

            <p className="marque">➡️ Go for it anyway {"->"}</p>

            <p className="marque">🗼 The analogy of the tower of Hanoi to programming {"->"}</p>

            <p className="marque">💻 First contact with code {"->"}</p>

            <p className="marque">🚀 Starting... {"->"}</p>

        </div>

    );
}
