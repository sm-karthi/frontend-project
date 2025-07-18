import Link from "next/link";

export function OpenSource(){
    return(
        <div className="flex flex-col space-y-6">

            <div className="leading-10">
                <h2 className="bg-[#3a3a3a] font-bold text-white w-fit mb-3">My Github</h2>

                <Link className="text-white underline cursor-pointer" target="_blank" href={"https://github.com/Rajavasanthan"}>https://github.com/Rajavasanthan</Link>
            </div>

        </div>
    )
}