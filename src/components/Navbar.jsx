import MainButton from "./MainButton";
import Logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <header className="flex justify-between items-center mx-auto max-w-7xl my-8">
      <img src={Logo} alt="logo" width={139} height={20} />
      <nav>
        <ul>
          <li className="flex gap-6 text-grayish-blue">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </li>
        </ul>
      </nav>
      <MainButton label="Request Invite" />
    </header>
  );
}

export default Navbar;
