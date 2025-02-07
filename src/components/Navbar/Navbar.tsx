import Logo from "./Logo";
import Menu from "./Menu";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <Logo />
      <Menu />
    </nav>
  );
}
