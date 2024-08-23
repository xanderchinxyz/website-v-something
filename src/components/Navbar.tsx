import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    return (
        <div className="bg-color-4 md:w-auto md:flex flex-col md:h-full items-center p-4 md:p-12 rounded-[50px]">
            <div className="flex md:flex-col md:gap-8 gap-4 h-full w-[120px] md:text-sm text-[10px] md:tracking-widest underline items-center md:place-items-start">
                <Image
                    src="/profile.png"
                    height={100}
                    width={100}
                    alt="Dummy Image"
                    className="rounded-full aspect-square object-cover w-[50px] md:w-auto h-[50px] md:h-auto"
                />      
                <Link href="/" className="">HOME</Link>
                <Link href="/projects" className="">PROJECTS</Link>
                <Link href="/work" className="">WORK</Link>
                <Link href="https://devpost.com/xander-chin" target="_blank">HACKATHONS</Link>
                {/* <Link href="" className="">RESUME</Link> */}
            </div>
        </div>
    )
}