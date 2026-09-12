import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <div className="py-2">
  <div className="container mx-auto">

    {/* Mobile Navbar */}
    <div className="grid grid-cols-3 items-center sm:hidden">

      {/* Hamburger - Left */}
      <div className="flex justify-start">
        <RxHamburgerMenu className="text-2xl" />
      </div>

      {/* Logo - Center */}
      <div className="flex justify-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-32"
        />
      </div>

      {/* Buttons - Right */}
      <div className="flex justify-end gap-1">
        <button className="btn btn-ghost btn-sm">
          Sign In
        </button>
        <button className="btn btn-secondary btn-sm">
          Sign Up
        </button>
      </div>

    </div>


    {/* Desktop Navbar */}
    <div className="hidden sm:flex justify-between items-center">

      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="w-32"
      />

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-4">
          <li><a href="">Home</a></li>
          <li><a href="">Technologies</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button className="btn btn-ghost">Sign In</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>

    </div>

  </div>
</div>
    );
};

export default Nav;
