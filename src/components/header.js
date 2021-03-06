import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import Nav from "./nav"
import Title from "./ui/title"
import NavToggler from "./ui/nav-toggler"
import LogoIcon from "../svg/icon.svg"
import LogoType from "../svg/logotype.svg"

const Header = ({ color }) => {
  const [isNavOpen, setisNavOpen] = React.useState(false)

  const headerClass = classNames({
    "fixed top-0 left-0 z-50 py-3 w-full lg:absolute lg:py-5": true,
    "bg-light bg-opacity-50": color === "light",
    "bg-grad-from bg-opacity-90": color !== "light",
  })

  return (
    <header className={headerClass}>
      <div className="px-4 flex items-center 2xl:px-12">
        <Link to="/" className="hover:text-night">
          <span className="sr-only">
            <Title />
          </span>

          <div className="flex items-center">
            <LogoIcon className="h-10 w-auto lg:h-14" />
            <span>
              <LogoType className="ml-2 w-auto h-6 hidden lg:block" />
            </span>
          </div>
        </Link>

        <Nav isOpen={isNavOpen} color={color} />

        <NavToggler
          onClick={() => setisNavOpen(!isNavOpen)}
          isOpen={isNavOpen}
        />
      </div>
    </header>
  )
}

export default Header
