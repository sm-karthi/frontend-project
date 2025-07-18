import Link from "next/link";

export function Career() {
    return (
        <div className="flex flex-col space-y-6">

            <p className="leading-10">Check out <Link href={"https://www.linkedin.com/in/rajavasanthan/"} className="font-bold text-white cursor-pointer underline">
                     my LinkedIn experience section</Link> for more details
            </p>

            <div className="leading-10">
                <h2 className="bg-[#3a3a3a] font-bold text-white w-fit mb-3">Tech Lead | Senior Front-end Engineer</h2>

                <p>Itaú Unibanco | São Paulo, Brazil | 2023 {"->"} current</p>
            </div>


            <div className="leading-10">
                <h2 className="bg-[#3a3a3a] font-bold text-white w-fit mb-3">Senior Front-end Engineer</h2>

                <p>Red Ventures | Charlotte, USA | 2018 {"->"} 2023</p>
            </div>


            <div className="leading-10">
                <h2 className="bg-[#3a3a3a] font-bold text-white w-fit mb-3">Front-end Engineer</h2>

                <p>Shawee | São Paulo, Brazil | 2017 {"->"} 2018</p>
            </div>


             <div className="leading-10">
                <h2 className="bg-[#3a3a3a] font-bold text-white w-fit mb-3">Front-end Engineer</h2>

                <p>Horizon Four | São Paulo, Brazil | 2017 {"->"} 2018</p>
            </div>


            <div className="leading-10">
                <h2 className="bg-[#3a3a3a] font-bold text-white w-fit mb-3">A ”Handyman Engineer”</h2>

                <p>Ag. Empreendora | São Paulo, Brazil | 2016 {"->"} 2017</p>
            </div>

        </div>
    )
}