import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Letter from "../components/TeahcerToStudentLetter";
import styled from "../styles/TeacherToStudentCSS.module.css";

function TeacherToStudentPage() {
  return (
    <>
      <Navbar />
      <div className='TeacherToStudentContent'>
        <div className={styled.writeLetterSection}>
          <Letter />
        </div>
      </div>
    </>
  );
}

export default TeacherToStudentPage;
