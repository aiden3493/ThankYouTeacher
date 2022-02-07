import styled from "../styles/message.module.css";
import MessageBox from "./messageBox";
import Link from "next/link";

function message() {
  return (
    <div className={styled.message}>
      <h1>test</h1>
      <div className={styled.messageBoxes}>
        <Link href='/message/KangMinJae'>
          <div>
            <MessageBox value='강민재' />
          </div>
        </Link>

        <Link href='/message/KimSeungHa'>
          <div>
            <MessageBox value='김승하' />
          </div>
        </Link>

        <Link href='/message/MoonSoa'>
          <div>
            <MessageBox value='문소아' />
          </div>
        </Link>

        <Link href='/message/SungChaeWon'>
          <div>
            <MessageBox value='성채원' />
          </div>
        </Link>

        <Link href='/message/ShinWoochan'>
          <div>
            <MessageBox value='신우찬' />
          </div>
        </Link>
      </div>
      <div className={styled.messageBoxes}>
        <Link href='/message/AnDakyung'>
          <div>
            <MessageBox value='안다경' />
          </div>
        </Link>

        <Link href='/message/YuDokyung'>
          <div>
            <MessageBox value='유도경' />
          </div>
        </Link>

        <Link href='/message/LeeDongyoung'>
          <div>
            <MessageBox value='이동영' />
          </div>
        </Link>

        <Link href='/message/LeeSangheon'>
          <div>
            <MessageBox value='이상헌' />
          </div>
        </Link>

        <Link href='/message/LeeSeojung'>
          <div>
            <MessageBox value='이서정' />
          </div>
        </Link>
      </div>
      <div className={styled.messageBoxes}>
        <Link href='/message/LeeSieun'>
          <div>
            <MessageBox value='이시은' />
          </div>
        </Link>

        <Link href='/message/LeeEunwoo'>
          <div>
            <MessageBox value='이은우' />
          </div>
        </Link>

        <Link href='/message/LeeJungheon'>
          <div>
            <MessageBox value='이정헌' />
          </div>
        </Link>

        <Link href='/message/LeeJaehee'>
          <div>
            <MessageBox value='이재희' />
          </div>
        </Link>

        <Link href='/message/LeeChaekyung'>
          <div>
            <MessageBox value='이채경' />
          </div>
        </Link>
      </div>
      <div className={styled.messageBoxes}>
        <Link href='/message/LeeHyunsoo'>
          <div>
            <MessageBox value='이현수' />
          </div>
        </Link>

        <Link href='/message/LeeHaemin'>
          <div>
            <MessageBox value='이해민' />
          </div>
        </Link>

        <Link href='/message/ChaeHyerim'>
          <div>
            <MessageBox value='채혜림' />
          </div>
        </Link>

        <Link href='/message/ChoiYeram'>
          <div>
            <MessageBox value='최예람' />
          </div>
        </Link>

        <Link href='/message/ChoiJinkyu'>
          <div>
            <MessageBox value='최진규' />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default message;
