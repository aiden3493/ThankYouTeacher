import { motion } from "framer-motion";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import styled from "../styles/TeacherToStudentCSS.module.css";

function TeacherToStudentComponents() {
  const [data, setData] = useState<any>([]);
  const [msg, setMsg] = useState("");
  const [photos, setPhotos] = useState<any>([]);

  const [isWroted, setIsWroted] = useState(false);

  useEffect(() => {
    fetch(`${Router.basePath}/api/message`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.message);
        if (data != "") {
          const index = data.findIndex(
            (element: any) => element.id === "LeeSoYeon"
          );
          const msgObject = data[index];

          setPhotos(msgObject.photo);
          setMsg(`${msgObject.message}`);
        }
      });
    if (msg != "None") {
      setIsWroted(true);
    } else {
      setIsWroted(false);
    }
  });

  return (
    <div className={styled.TeacherToStudentSection}>
      {isWroted ? (
        <>
          <h1 key='TTS-title'>6-4반 아이들에게</h1>
          <h2 style={{ fontSize: "17px" }}>{msg}</h2>
        </>
      ) : (
        <>
          <h1 key='TTS-title'>이제 선생님 차례에요!</h1>
          <Link href='/password'>
            <motion.button
              key='TTS-btn'
              className={styled.Btn}
              whileHover={{ scale: 1.1 }}>
              Go!
            </motion.button>
          </Link>
        </>
      )}
    </div>
  );
}

export default TeacherToStudentComponents;
