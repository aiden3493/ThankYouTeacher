import styled from "../styles/letter.module.css";

function Letter() {
  return (
    <div className={styled.letter}>
      <h1 key='letter-title'>test</h1>
      <p key='letter-content'>
        안녕하세요 선생님!
        <br /> 이 사이트는 오직 선생님을 위해 제작됐어요!
        <br /> 모두 우리반이 함께 만들었습니다
        <br /> 천천히 아래로 내리면서 봐주시고,
        <br /> 맨 아래 제작과정 탭도 있으니까
        <br /> 그냥 둘러만 봐주세요
        <br />
        <br /> 1년동안 정말 감사드렸고,
        <br /> 앞으로도 꽃길만 걸으세요!
      </p>
    </div>
  );
}

export default Letter;
