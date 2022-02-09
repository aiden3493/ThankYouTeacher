import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Letter from "../components/TeahcerToStudentLetter";
import styled from "../styles/TeacherToStudentCSS.module.css";

function TeacherToStudentPage() {
  const router = useRouter();
  const PasswordCorrect = router.query.PasswordCorrect;

  return (
    <div>
      {PasswordCorrect ? (
        <>
          <div className='TeacherToStudentContent'>
            <div className={styled.writeLetterSection}>
              <Letter />
            </div>
          </div>
        </>
      ) : (
        <div className={styled.errorMSGContainer}>
          <h1 className={styled.errorMSG}>비밀번호를 입력하고 들어와주세요</h1>
        </div>
      )}
    </div>
  );
}

export default TeacherToStudentPage;
