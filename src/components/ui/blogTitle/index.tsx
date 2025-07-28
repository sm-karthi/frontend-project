import { useBlogsData } from "@/hooks/useBlogsData";
import Link from "next/link";

export function BlogTitleAndDes() {

    const blogsData = useBlogsData().sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("/"));
        const dateB = new Date(b.date.split("/").reverse().join("/"));
        return dateB.getTime() - dateA.getTime();
    });

    return (
        blogsData.map((blog) => (

            <Link key={blog.id} href={`blog/${blog.fileName}`}>

                <div className="flex flex-col md:flex-row gap-4 py-6 md:px-4 w-full border-b border-gray-700 hover:bg-white hover:text-black duration-150 cursor-pointer">

                    <img src={blog.imageUrl} alt="image" draggable="false" />

                    <div>
                        <h2 className="font-bold text-lg md:ml-8 md:text-2xl">{blog.title}</h2>

                        <p className="text-[#6f6f6f] ml-6 md:ml-14 mt-2 text-md md:text-lg">{blog.description}</p>

                        <p className="ml-6 md:ml-14 text-md md:text-lg mt-6">Go to the last published {"->"}</p>
                    </div>

                </div>

            </Link>
        ))
    )
}