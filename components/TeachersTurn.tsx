import { motion } from "framer-motion";
import Link from "next/link";
import styled from "../styles/Teacher'sTurn.module.css";

function TeacherSTurn() {
  return (
    <div className={styled.TeachersTurnSection}>
      <h1>test</h1>
      <Link href='/TeahcerToStudent'>
        <motion.button
          className={styled.Btn}
          initial={{ scale: 1 }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{ duration: 0.15 }}>
          test
        </motion.button>
      </Link>
    </div>
  );
}

export default TeacherSTurn;
