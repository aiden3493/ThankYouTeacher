import Link from "next/link";
import styled from "../styles/footer.module.css";

function footer() {
  return (
    <div className={styled.footer}>
      <hr className={styled.outHr1} />
      <hr className={styled.inHr1} />
      <div className={styled.Link}>
        <Link href='/making'>
          <h1 className={styled.makingLink}>제작과정</h1>
        </Link>
      </div>
      <hr className={styled.inHr2} />
      <div className={styled.maker}>
        <div className={styled.maker1}>
          <h1>Product Manager</h1>
          <h1 className={styled.person1}>유도경</h1>
          <h1 className={styled.person}>문소아</h1>
        </div>
        <div className={styled.maker1}>
          <h1>Assistant Manager</h1>
          <h1 className={styled.Assist}>문소아</h1>
          <h1 className={styled.person}>채혜림</h1>
        </div>
        <div className={styled.maker23}>
          <h1>Developer</h1>
          <h1 className={styled.person2}>유도경</h1>
        </div>
        <div className={styled.maker23}>
          <h1>Thanks To</h1>
          <div className={styled.specialThanks}>
            <h1 className={styled.SPTHXperson}>강민재</h1>
            <h1 className={styled.SPTHXperson}>김승하</h1>
            <h1 className={styled.SPTHXperson}>성채원</h1>
            <h1 className={styled.SPTHXperson}>신우찬</h1>
            <h1 className={styled.SPTHXperson}>안다경</h1>
            <h1 className={styled.SPTHXperson}>이동영</h1>
            <h1 className={styled.SPTHXperson}>이상헌</h1>
            <h1 className={styled.SPTHXperson}>이서정</h1>
            <h1 className={styled.SPTHXperson}>이시은</h1>
            <h1 className={styled.SPTHXperson}>이은우</h1>
            <h1 className={styled.SPTHXperson}>이정헌</h1>
            <h1 className={styled.SPTHXperson}>이재희</h1>
            <h1 className={styled.SPTHXperson}>이채경</h1>
            <h1 className={styled.SPTHXperson}>이현수</h1>
            <h1 className={styled.SPTHXperson}>이해민</h1>
            <h1 className={styled.SPTHXperson}>최예람</h1>
            <h1 className={styled.person3}>최진규</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
