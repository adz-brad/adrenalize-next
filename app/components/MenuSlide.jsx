'use client'

import { useState, useRef } from "react"
import { MdApps, MdClose } from 'react-icons/md'
import { BiMessageSquareDots, BiUser } from 'react-icons/bi'
import { socialLinks } from "../data"
import { useOnClickOutside } from "usehooks-ts"
import ScrollButton from "./ScrollButton"

export default function MenuSlide({ children }) {

    const [ open, setOpen ] = useState(false)

    const slideRef = useRef(null)

    const handleClickOutside = () => {
        if(open){setOpen(false)}
    }

    useOnClickOutside(slideRef, handleClickOutside)

    return (
        <>
            <div
                className={`${!open && 'text-base-100'} fixed top-5 right-4 flex flex-row items-center space-x-4 z-30 text-3xl`}
            >
                <ul className="flex flex-row items-center space-x-1">
                    {socialLinks.map((link, i) => {
                        return (
                            <a 
                                key={i}
                                href={link.href} 
                                target="_blank" 
                                className={`${open ? 'hover:text-primary-600' : 'text-base-50 hover:text-primary-300'} transition-colors drop-shadow-md`}
                                title={link.title}
                            >
                                {link.icon}
                            </a>
                        )
                    })}
                </ul>
                <button
                    onClick={() => setOpen(!open)}
                    className={`text-4xl ${open ? 'text-primary-600 hover:text-primary-500' : 'text-primary-400 hover:text-primary-300'} transition-colors`}
                    title={!open ? 'Open Menu' : 'Close Menu'}
                >
                    {open ? <MdClose /> : <MdApps /> }
                </button>
            </div>
            <div className={`fixed top-0 right-0 ${!open && 'translate-x-full'} transition-transform flex flex-col grow z-20 bg-base-100 w-screen md:max-w-[400px] h-screen shadow-xl`} ref={slideRef}>
                <div className="relative top-16 h-[calc(100vh-4rem)]">
                    {children}
                </div>
            </div>
            <div className="fixed bottom-4 right-4 z-30 text-3xl flex flex-row items-center space-x-4">
                <button
                    className={`${open ? 'hover:text-primary-500' : 'text-base-50 hover:text-primary-300'} transition-colors`}
                    title="User Menu"
                >
                    <BiUser className="drop-shadow-md" />
                </button>
                <ScrollButton
                    scrollId="contact"
                    className={`${open ? 'text-base-600 hover:text-primary-500' : 'text-base-50 hover:text-primary-300'} transition-colors`}
                    title="Contact Us"
                >
                    <BiMessageSquareDots className="drop-shadow-md" />
                </ScrollButton>
            </div>
        </>
    )

}
