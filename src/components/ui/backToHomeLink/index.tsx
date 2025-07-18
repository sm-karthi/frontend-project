import Link from "next/link";

export function BackToHomeLink() {
  return (
    <Link href={"/"} className="hover:underline text-sm md:text-xl duration-150 hover:text-white h-fit w-fit" >{"<-"} back to home</Link>
  );
}