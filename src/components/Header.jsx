
import Image from "next/image";
export default function Header(props) {
    return (
        <div className="grid grid-cols-9 sm:grid-cols-9 gap-4 items-center justify-items-center p-8 pb-20 max-w-[1000px]">
            <a className={`${props?.pathname == '/about' ? 'text-blue-400':'text-blue-200'} font-bold tracking-wider`} href="/about">About</a>
            <span className="font-bold text-blue-400">•</span>
            <a className={`${props?.pathname == '/work' ? 'text-blue-400':'text-blue-200'} font-bold tracking-wider`} href="/work">
                Work
            </a>
            <span className="font-bold text-blue-400">•</span>

            <a className="text-blue-200 font-bold tracking-wider" href="/">
                <Image
                    className="dark:invert"
                    src="/mihir-logo.png"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
            </a>
            <span className="font-bold text-blue-400">•</span>
            <a className={`${props?.pathname == '/skills' ? 'text-blue-400':'text-blue-200'} font-bold tracking-wider`} href="/skills" >
                Skills
            </a>
            <span className="font-bold text-blue-400">•</span>
            <a className={`${props?.pathname == '/contacts' ? 'text-blue-400':'text-blue-200'} font-bold tracking-wider`} href="/contacts">
                Contacts
            </a>
        </div>
    )
}