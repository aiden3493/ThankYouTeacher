import styled from "../styles/message.module.css";
import MessageBox from "./messageBox";
import { motion } from "framer-motion";
import Router from "next/router";
import { useState } from "react";

function Message() {
  const onClick = (Sid: any, Sname: any, msg: any) => {
    Router.push(
      {
        pathname: `/message/${Sid}`,
        query: {
          Smsg: `${msg}`,
          Sname: `${Sname}`,
          id: `${Sid}`,
        },
      },
      `/message/${Sid}`
    );
  };

  return (
    <div className={styled.message}>
      <h1 key='msg-title'>우리들의 편지</h1>
      <div className={styled.messageBoxes} key='msg-box1'>
        <motion.div
          key='msg-1'
          layout
          layoutId='KangMinJae'
          onClick={() =>
            onClick(
              "KangMinJae",
              "강민재",
              "선생님 안녕하세요. 1년동안 가르쳐주셔서 감사합니다. 코로나 시국에도 열심히 가르쳐주셔서 감사합니다. 선생님 순산하세요. ㅎㅎ"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='강민재' />
        </motion.div>

        <motion.div
          key='msg-2'
          layout
          layoutId='KimSeungHa'
          onClick={() =>
            onClick(
              "KimSeungHa",
              "김승하",
              "선생님, 1년동안 등교하는 날도 거의 없어서 어색한 줌으로 저희를 가르치는라 고생하셨고 너무 감사합니다."
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='김승하' />
        </motion.div>

        <motion.div
          key='msg-3'
          layout
          layoutId='MoonSoa'
          onClick={() =>
            onClick(
              "MoonSoa",
              "문소아",
              "1년동안 부족한 저를 가르쳐주시고 배움을 주셔서 감사했습니다! 선생님 정말 멋지시고 이쁘셔요😆 그동안 감사했습니다!!!!!"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='문소아' />
        </motion.div>

        <motion.div
          key='msg-4'
          layout
          layoutId='SungChaeWon'
          onClick={() =>
            onClick(
              "SungChaeWon",
              "성채원",
              "안녕하세요 선생님 1년동안 감사했어요. 학교에 등교 자주 못해도 선생님 활짝 핀 모습 웃는 모습 보기 좋았어요. 선생님 1년동안 수고하셨고, 앞으로도 자주 연락드릴게요"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='성채원' />
        </motion.div>

        <motion.div
          key='msg-5'
          layout
          layoutId='ShinWooChan'
          onClick={() =>
            onClick(
              "ShinWooChan",
              "신우찬",
              "안녕하세요. 2021년 한 해 동안 6-4반 아이들을 위해 공부도 가르쳐주시고 zoom으로 아이들을 놀아주셔서 감사합니다. 2022년도 화이팅하시고 이번 년도에 더 좋은 애들을 만나 잘 가르쳐주세요. 그럼 이만 감사했습니다."
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='신우찬' />
        </motion.div>
      </div>
      <div className={styled.messageBoxes} key='msg-box2'>
        <motion.div
          key='msg-6'
          layout
          layoutId='AnDaKyung'
          onClick={() =>
            onClick("AnDaKyung", "안다경", "1년동안 감사했습니다. 다시만나요 ❤")
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='안다경' />
        </motion.div>

        <motion.div
          key='msg-7'
          layout
          layoutId='YuDokyung'
          onClick={() =>
            onClick(
              "YuDokyung",
              "유도경",
              "초등학교의 마지막 1년을 함께 해주셔서 정말 감사합니다. 앞으로도 쭉 기억될 추억을 많이 만들어 주신거 같아요. 앞으로도 생각 날 때 연락 할게요! 감사합니다 !"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='유도경' />
        </motion.div>

        <motion.div
          key='msg-8'
          layout
          layoutId='LeeDongyoung'
          onClick={() =>
            onClick(
              "LeeDongyoung",
              "이동영",
              "선생님 비록 많이 만나지는 못했지만 짧은 시간동안 즐거웠습니다. 안녕히계세요 ~~!"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이동영' />
        </motion.div>

        <motion.div
          key='msg-9'
          layout
          layoutId='LeeSangheon'
          onClick={() =>
            onClick(
              "LeeSangheon",
              "이상헌",
              "상헌이는 아쉽게도 메세지를 받지 못했습니다.ㅠ"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이상헌' />
        </motion.div>

        <motion.div
          key='msg-10'
          layout
          layoutId='LeeSeojung'
          onClick={() =>
            onClick(
              "LeeSeojung",
              "이서정",
              "선생님 초등학교 마지막 학년인 6학년 저희를 가르쳐주셔서 감사하고, 앞으로 중학교 가서도 선생님 기억하고 꼭 마음 한구석에는 넣어두고 있을게요, 감사합니다☺️"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이서정' />
        </motion.div>
      </div>
      <div className={styled.messageBoxes} key='msg-box3'>
        <motion.div
          key='msg-11'
          layout
          layoutId='LeeSieun'
          onClick={() =>
            onClick(
              "LeeSieun",
              "이시은",
              "안녕하세요,, 저 시은이예요!  1년동안 저희 담임을 해주셔서 감사합니댜🥳 1년동안 되게 재밌었어요!!  1년동안 잘 해주셔서 정말 감사하구 임신 축하드려요😙 저희반 되게 다 밝아서 힘드셨을 거 같은데 고생 많으셔써요,,, 1년동안 코로나는 심했지만 나름 재밌는 경험이 될 거 같아요! 졸업이라서 아쉽긴 하지만 마지막 초등생활을 잘 보내게 해주셔서 감사합니다!! 저 꼭 잊지 마세요😁 남은 인생도 행복하시길 바래여😍💜 감사합니댜"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이시은' />
        </motion.div>

        <motion.div
          key='msg-12'
          layout
          layoutId='LeeEunwoo'
          onClick={() =>
            onClick(
              "LeeEunwoo",
              "이은우",
              "선생님! 일 년 동안 함께해서 너무너무 즐거웠어요>< 그리고 저희를 잘 가르켜 주셔서 감사합니다. 항상 건강하세요!~"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이은우' />
        </motion.div>

        <motion.div
          key='msg-13'
          layout
          layoutId='LeeJungheon'
          onClick={() =>
            onClick(
              "LeeJungheon",
              "이정헌",
              "저에 초등학교 마지막학년을 무사히 마쳐주게해주셔서 감사합니다  작년 고생하셨고, 임신 축하드립니다 지금 제가 이 편지를 쓰고있을때에는 애기에 성별을 몰라서 아들이라면 개인적으로 운동을 좀 시키시는게 어떤지... 한번 생각해봅니다 졸업을 한다는게 아직도 믿기지가 않네요 😂🎓 그리고 100년 미리 새해복 많이많이 받으세요 행복한 결혼생활 되십시오 선생님 화이팅^^~"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이정헌' />
        </motion.div>

        <motion.div
          key='msg-14'
          layout
          layoutId='LeeJaehee'
          onClick={() =>
            onClick(
              "LeeJaehee",
              "이재희",
              "6학년 동안 재미있게 가르쳐 주셔서 감사합니다. 동창회 때 또 봬요"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이재희' />
        </motion.div>

        <motion.div
          key='msg-15'
          layout
          layoutId='LeeChaekyung'
          onClick={() =>
            onClick(
              "LeeChaekyung",
              "이채경",
              "선생님 하루도 조용할날이 없는 6학년의 추억들을 만들어주셔서 감사해요 늘 감사하다고 말하고싶었고 드디어 제대로 얘기하네요 그리고 선생님께서 특별한 날에 사인해주신다고 얘기해주셔서 생일때 받으려고 했지만 실패했어요! (자가격리) 그러니까 이번엔 해주실꺼죠? 항상 잘지내세요😄"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이채경' />
        </motion.div>
      </div>
      <div className={styled.messageBoxes} key='msg-box4'>
        <motion.div
          key='msg-16'
          layout
          layoutId='LeeHyunsoo'
          onClick={() =>
            onClick(
              "LeeHyunsoo",
              "이현수",
              "선생님 덕분에 많이 배운 거 같아요. 감사합니다"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이현수' />
        </motion.div>

        <motion.div
          key='msg-17'
          layout
          layoutId='LeeHaemin'
          onClick={() =>
            onClick(
              "LeeHaemin",
              "이해민",
              "이소연 선생님 한 해 동안 우리를 가르쳐주셔서 감사합니다. 온라인으로 수업하시느라 힘드셨을텐데 열심히 해주셔서 감사해요."
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이해민' />
        </motion.div>

        <motion.div
          key='msg-18'
          layout
          layoutId='ChaeHyerim'
          onClick={() =>
            onClick(
              "ChaeHyerim",
              "채혜림",
              "선생님 1년동안 감사했습니다 선생님 임신 축하드리고 사랑합니다❤"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='채혜림' />
        </motion.div>

        <motion.div
          key='msg-19'
          layout
          layoutId='ChoiYeram'
          onClick={() =>
            onClick(
              "ChoiYeram",
              "최예람",
              "선생님 안녕하세요? 초등학교의 막바지인 6학년을 맡아주셔서 감사합니다. 6학년 때 추억이 가장 좋은 것 같아요. 재밌고, 좋은 추억 만들어 주셔서 감사합니다. 최고의 6학년을 만들어 주신 이소연 선생님 감사합니다."
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='최예람' />
        </motion.div>

        <motion.div
          key='msg-20'
          layout
          layoutId='ChoiJinkyu'
          onClick={() =>
            onClick(
              "ChoiJinkyu",
              "최진규",
              "션섕넴 이번1년동안 잘 가르쳐주셔서 감사합니다. 이번에 처음한 팝스부터 우쿠렐레까지 너무 제미있었어요.감사해요. 아 그리고 임신 축하드려요.안녕히계세여~(^-^)"
            )
          }
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='최진규' />
        </motion.div>
      </div>
    </div>
  );
}

export default Message;
