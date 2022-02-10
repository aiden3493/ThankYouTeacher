import { motion } from "framer-motion";
import Link from "next/link";
import styled from "../styles/TeacherToStudentCSS.module.css";

function TeacherToStudentComponents() {
  return (
    <div className={styled.TeacherToStudentSection}>
      <h1 key='TTS-title'>이제 선생님 차례에요!</h1>
      <Link href='/password'>
        <motion.button
          key='TTS-btn'
          className={styled.Btn}
          whileHover={{ scale: 1.1 }}>
          Go!
        </motion.button>
      </Link>
    </div>
  );
}

export default TeacherToStudentComponents;
