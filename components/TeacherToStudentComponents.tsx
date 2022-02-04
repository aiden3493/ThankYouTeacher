import { motion } from "framer-motion";
import Link from "next/link";
import styled from "../styles/TeacherToStudentCSS.module.css";

function TeacherToStudentComponents() {
  return (
    <div className={styled.TeacherToStudentSection}>
      <h1>test</h1>
      <Link href='/TeacherToStudent'>
        <motion.button className={styled.Btn} whileHover={{ scale: 1.1 }}>
          Go!
        </motion.button>
      </Link>
    </div>
  );
}

export default TeacherToStudentComponents;
