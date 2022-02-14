import { motion } from "framer-motion";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import styled from "../styles/TeacherToStudentCSS.module.css";

function TeacherToStudentComponents() {
  const [data, setData] = useState<any>([]);
  const [msg, setMsg] = useState("");
  // 이미지 안씀
  // const [photos, setPhotos] = useState<any>([]);

  const [isWroted, setIsWroted] = useState(false);

  useEffect(() => {
    async function fetchApi() {
      await fetch(`${Router.basePath}/api/message/LeeSoYeon`)
        .then((res) => res.json())
        .then((json) => {
          setData(json.message);
          if (data != "") {
            const index = data.findIndex(
              (element: any) => element.id === "LeeSoYeon"
            );
            const msgObject = data[index];

            // 이미지 안씀
            // setPhotos(msgObject.photo);
            setMsg(`${msgObject.message}`);
          }
        });
      if (msg != "None") {
        setIsWroted(true);
      } else {
        setIsWroted(false);
      }
    }
  });

  return (
    <div className={styled.TeacherToStudentSection}>
      {/* 원래는 주석된 코든데 줄바꿈 버그 때문에 아래 코드로 대체 */}
      {/* {!isWroted ? (
        <>
          <h1 key='TTS-title'>이제 선생님 차례에요!</h1>
          <Link href='/password'>
            <motion.button
              key='TTS-btn'
              className={styled.Btn}
              whileHover={{ scale: 1.1 }}
              style={{ color: "white", fontWeight: "bold" }}>
              Write!
            </motion.button>
          </Link>
        </>
      ) : ( */}
      <>
        <h1 key='TTS-title'>6-4반 아이들에게</h1>
        {/* <h2 style={{ fontSize: "16px" }}>{msg}</h2> */}
        <p style={{ fontSize: "16px" }}>사랑하는 6학년 4반!</p>
        <p style={{ fontSize: "16px" }}>
          처음 만난 날, 너희의 본색을 숨기고 조용히 앉아있던{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          2021년 3월 2일이 어제처럼 생생한데 시간 참 빠르다 그렇죠?{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          처음엔 조용한 줄 알았더니, 에너자이저 22명이라 선생님은 더 편하고
          반가웠어!
        </p>
        <p style={{ fontSize: "16px" }}>
          (선생님도 텐션 높구, 흥 많은 사람이라 우리 사이 더 잘 맞았었지 뭐야.)
        </p>
        <p style={{ fontSize: "16px" }}></p>
        <p style={{ fontSize: "16px" }}>
          온라인 수업 말고, 등교 수업이 많았다면{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          더 풍부하고 깊은 추억 많이 쌓았을 것 같다는 생각도 들어서 아쉬울
          뿐입니다..♥
        </p>
        <p style={{ fontSize: "16px" }}></p>
        <p style={{ fontSize: "16px" }}>
          한 명, 한 명 소중히 담아준 마음 잘 간직할게요!
        </p>
        <p style={{ fontSize: "16px" }}></p>
        <p style={{ fontSize: "16px" }}>
          부족한 점도 많았는데, 예쁜 추억을 담고, 각자 의미 있게 성장한 시간으로{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          2021년을 기억해줘서 말할 수 없이 고마워요~
        </p>
        <p style={{ fontSize: "16px" }}></p>
        <p style={{ fontSize: "16px" }}>
          선생님은 올해, 여러분 응원 받아서 건강하게 출산도 하고!
        </p>
        <p style={{ fontSize: "16px" }}>
          여러분처럼 밝고 빛나는 모습을 지닌 아이로 자랄 수 있도록 화이팅
          해볼게요~
        </p>
        <p style={{ fontSize: "16px" }}></p>
        <p style={{ fontSize: "16px" }}>
          2022년, 그리고 이어질 여러분의 앞날에 고민스러운 순간도 찾아올테지만
          걱정하지 않기!{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          마음은 급한데 결과는 따라주지 않을 때,{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          산 정상에서 바라본 풍경의 큰 감동보다,{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          오르다가 숨이 턱에 차서 땀 닦고 물 한 잔 들이키며 바라보는 그 풍경이
        </p>
        <p style={{ fontSize: "16px" }}>
          더 달콤하고 깊은 기억으로 남기도 하니 한숨에 높은 산 오르려 하지 말기
          :)
        </p>
        <p style={{ fontSize: "16px" }}></p>
        <p style={{ fontSize: "16px" }}>
          우리 각자의 속도로, 많이 고민하고 결정도 해 나가며 조금씩 천천히
          멋지게 거듭나자!
        </p>
        <p style={{ fontSize: "16px" }}></p>
        <p style={{ fontSize: "16px" }}>민재, 승하, 소아, 채원이, 우찬이, </p>
        <p style={{ fontSize: "16px" }}>
          다경이, 도경이, 동영이, 상헌이, 서정이
        </p>
        <p style={{ fontSize: "16px" }}>시은이, 은우, 재희, 정헌이, 채경이, </p>
        <p style={{ fontSize: "16px" }}>해민이, 현수, 혜림이, 예람이, 진규</p>
        <p style={{ fontSize: "16px" }}>
          멀리서 지내고 있지만 소중한 만남의 끈을 이어갈 정훈이, 경민이도!
        </p>
        <p style={{ fontSize: "16px" }}></p>
        <p style={{ fontSize: "16px" }}>♡ 선생님이 늘 응원할게! ♡</p>
      </>
      {/* )} */}
    </div>
  );
}

export default TeacherToStudentComponents;
