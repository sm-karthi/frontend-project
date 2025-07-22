import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import { Header } from "@/components";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default function BlogPage({ params }: { params: { blogId: string } }) {

    const filePath = path.join(process.cwd(), `src/assets/article/${params.blogId}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    return (
        <div className="h-screen pt-6 pb-1 px-5.5 overflow-x-hidden text-[#adadad]">
            <Header />

            <div className="max-w-4xl mx-auto mt-14 mb-12">
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: (props) => <h1 className="text-3xl sm:text-4xl font-bold my-6" {...props} />,
                        h2: (props) => <h2 className="text-2xl sm:text-3xl font-semibold my-5" {...props} />,
                        h3: (props) => <h3 className="text-xl sm:text-2xl font-semibold my-4" {...props} />,
                        p: (props) => <p className="my-4 leading-relaxed text-base sm:text-lg" {...props} />,
                        ul: (props) => <ul className="list-disc list-inside my-4 pl-5" {...props} />,
                        ol: (props) => <ol className="list-decimal list-inside my-4 pl-5" {...props} />,
                        li: (props) => <li className="mb-2" {...props} />,
                        img: (props) => {
                            console.log("image props", props);

                            return <img className="my-6" {...props} />
                        },
                        strong: (props) => <strong className="font-semibold" {...props} />,
                        em: (props) => <em className="italic" {...props} />,
                        table: (props) => (
                            <div className="overflow-x-auto my-6">
                                <table className="w-full border-collapse" {...props} />
                            </div>
                        ),
                        thead: (props) => <thead className="bg-gray-800" {...props} />,
                        tbody: (props) => <tbody {...props} />,
                        tr: (props) => <tr className="border border-gray-700" {...props} />,
                        th: (props) => <th className="text-left px-4 py-2 font-semibold" {...props} />,
                        td: (props) => <td className="px-4 py-2" {...props} />,
                    }}
                >
                    {fileContent}
                </Markdown>

            </div>

            <div className="mb-20 ">
                <Link href={"/blog"} className="hover:underline text-sm md:text-xl duration-150 hover:text-white h-fit w-fit">{"<-"} Back to blog</Link>
            </div>

        </div>
    );
}
