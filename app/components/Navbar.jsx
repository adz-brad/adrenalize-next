import Logo from "./Logo"
import MenuSlide from "./MenuSlide"
import Menu from "./Menu"

export default function Navbar() {
  return (
    <nav
      className="navbar text-base-950 shadow-xl bg-base-900 rounded-br-lg"
    >
      <Logo/>
      <MenuSlide>
        <Menu />
      </MenuSlide>
    </nav>
  )
}
