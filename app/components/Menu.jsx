import Link from "next/link"
import { navLinks } from "../data"

export default function Menu() {
  return (
    <ul className="flex flex-col space-y-2 py-4 px-8">
        {navLinks.map((link, i) => {
            return (
                <li 
                    key={i}
                    className="flex flex-col py-2 border-b border-base-600/30"
                    title={link.title}
                >
                    <Link 
                        href={link.href}
                        className="grow text-2xl font-semibold hover:text-primary-600"
                    >
                        {link.title}
                    </Link>
                    {link.subMenu &&
                        <ul 
                            title={`${link.title} Menu`}
                            className="text-lg"
                        >
                            {link.subMenu.map((item, i) => {
                                return (
                                    <li 
                                        key={i} 
                                        title={item.title}
                                        className="flex hover:font-semibold"
                                    >
                                        <Link
                                            href={item.href}
                                            key={i}
                                            className="w-full"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </li>
            )
        })}
    </ul>
  )
}
