import { useBlogsData } from "@/hooks/useBlogsData";
import { Blog } from "@/types";
import Link from "next/link";

export function Suggestion({ currentBlogName }: { currentBlogName: string }) {

    const blogsData = useBlogsData();

    function getRandomFiveItems(data: Blog[]) {

        const copy = [...data];
        const result: Blog[] = [];

        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * copy.length);
            result.push(copy[randomIndex]);
            copy.splice(randomIndex, 1);
        }

        return result;
    }


    const filteredBlogs = blogsData.filter((blog) => blog.fileName !== currentBlogName);

    const randomFive = filteredBlogs.length > 0 ? getRandomFiveItems(filteredBlogs) : [];

    return (
        <div className="max-w-4xl mx-auto mt-6 mb-20">

            <h2 className="text-2xl sm:text-3xl font-semibold">Suggestion for you</h2>

            <div className="flex flex-col mt-10 md:space-x-10 md:flex-row gap-6 flex-wrap">

                {randomFive.map((blog) => (

                    <Link key={blog.id} href={`/blog/${blog.fileName}`}>

                        <div className="border border-[#6f6f6f] rounded-xl md:w-58 p-4 space-y-2">

                            <img src={blog.imageUrl} alt="Image" draggable="false" className="w-full" />

                            <h3 className="text-xl font-medium">{blog.title.slice(0, 38)}...</h3>

                            <p className="text-sm text-[#6f6f6f] mt-1">{blog.description.slice(0, 20)}...</p>

                        </div>

                    </Link>
                ))}

            </div>

        </div>
    );
}
