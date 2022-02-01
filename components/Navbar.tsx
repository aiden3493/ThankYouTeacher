import Styled from "../styles/navbar.module.css";
import Image from "next/image";
import logo from "../public/logo.svg";

function navbar(): JSX.Element {
  return (
    <div className='navigation bar'>
      <nav className={Styled.navbar}>
        <div>
          <Image className={Styled.SvgLogo} src={logo} />
        </div>
      </nav>
    </div>
  );
}

export default navbar;
