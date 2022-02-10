import styled from "../styles/Home.module.css";

import Letter from "../components/letter";
import Message from "../components/message";
import Photos from "../components/photos";
import TeacherToStudentComponents from "../components/TeacherToStudentComponents";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div className={styled.content}>
        <Letter key='letter' />
        <Message key='Message' />
        <Photos key='Photos' />
        <TeacherToStudentComponents key='TeacherToStudentComponents' />
      </div>
      <Footer key='Footer' />
    </>
  );
}

export default Home;
