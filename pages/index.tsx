import styled from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Letter from "../components/letter";
import Message from "../components/message";
import Photos from "../components/photos";
import TeacherToStudentComponents from "../components/TeacherToStudentComponents";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div className={styled.content}>
        <Letter />
        <Message />
        <Photos />
        <TeacherToStudentComponents />
      </div>
      <Footer />
    </>
  );
}

export default Home;
