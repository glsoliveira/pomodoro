import { HeaderContainer } from "./styles";
import logo from "./../../assets/logo.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/project-02" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/project-02/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
