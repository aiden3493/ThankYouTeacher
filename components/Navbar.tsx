import Styled from "../styles/navbar.module.css";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";

function navbar(): JSX.Element {
  return (
    <div className='navigation bar'>
      <nav className={Styled.navbar}>
        <Link href='/'>
          <div className={Styled.logo}>
            <Image className={Styled.SvgLogo} src={logo} />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default navbar;
