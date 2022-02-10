import Styled from "../styles/navbar.module.css";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";

function navbar(): JSX.Element {
  return (
    <div className='navigation bar'>
      <nav className={Styled.navbar} key='nav-nav'>
        <Link href='/'>
          <div className={Styled.logo} key='nav-logo'>
            <Image key='nav-img' className={Styled.SvgLogo} src={logo} />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default navbar;
