import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link
    href="/"
    className="logoWrapper group"
    title="Home"
  >
    <Image
      src="/ad-logo.webp"
      priority
      height={70}
      width={70}
      className="logo"
      alt="Adrenalize Digital Product Solutions Logo"
    />
    <span 
      className="hidden sm:block navTitle"
    >
      Adrenalize
    </span>
  </Link>
  )
}
