import Link from "next/link"
import { socialLinks, navLinks } from "../data"
import Logo from "./Logo"

export default function Footer() {

  const groupLinks = navLinks.filter(item => item.subMenu)
  const singleLinks = navLinks.filter(item => !item.subMenu)
  
  return (
    <footer className="flex flex-col text-base-50 bg-base-800 shadow-xl">
      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center px-4 py-6 mx-auto w-full max-w-screen-xl">
        <div className="flex flex-row items-center space-x-4 lg:space-x-0 lg:items-start lg:flex-col lg:space-y-4">
          <Logo />
          <ul className="flex flex-row items-center space-x-1 text-3xl">
            {socialLinks.map((link, i) => {
                return (
                    <a 
                        key={i}
                        href={link.href} 
                        target="_blank" 
                        className="hover:text-primary-300 transition-colors"
                        title={link.title}
                    >
                        {link.icon}
                    </a>
                )
            })}
          </ul>
        </div>
        <ul className="flex flex-col lg:flex-row lg:justify-end mx-auto grow space-y-6 lg:space-y-0 lg:space-x-16">
            {groupLinks.map((link, i) => {
                return (
                  <li 
                    key={i}
                    title={`${link.title} Menu`}
                    className="flex flex-col items-center lg:items-start space-y-1"
                  >
                    <Link href={link.href} className="text-lg font-semibold hover:text-primary-300">
                      {link.title}
                    </Link>
                    <ul className="flex flex-col items-center lg:items-start">
                      {link.subMenu.map((item, i) => {
                        return (
                          <li 
                            key={i}
                            title={item.title}
                            className="hover:text-primary-300"
                          >
                            <Link href={item.href}>
                              {item.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
            })}
            <li
              className="flex flex-col items-center lg:items-start space-y-1"
              title="More Links Menu"
            >
              <span className="text-lg font-semibold hover:text-primary-600">
                More
              </span>
              <ul className="flex flex-col items-center lg:items-start">
                {singleLinks.map((link, i) => {
                  return (
                    <li 
                      key={i}
                      title={link.title}
                      className="hover:text-primary-300"
                    >
                    <Link href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                  )
                })}
              </ul>
            </li>
        </ul>
      </div>
      <div className="bg-base-950 text-base-50">
        <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start lg:space-y-0 lg:flex-row mx-auto max-w-screen-xl px-4 py-6">
        <span className="font-semibold mt-4 lg:mt-0">
          © 2023 Adrenalize Digital
        </span>
        <div className="flex flex-col lg:flex-row items-center space-y-1 lg:space-y-0 lg:space-x-4 lg:ml-auto lg:mr-16">
          <Link href="/accessibility">
            Accessibility
          </Link>
          <Link href="/terms-conditions">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
      </div>
    </footer>
  )
}
