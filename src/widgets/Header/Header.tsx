import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderLink } from "./Header.styled";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLink to={"/"}>Home</HeaderLink>
      <HeaderLink to={"/search"}>Search</HeaderLink>
    </HeaderWrapper>
  );
}

export default Header;
