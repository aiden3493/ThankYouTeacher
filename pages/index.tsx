import styled from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Letter from "../components/letter";
import Message from "../components/message";
import Photos from "../components/photos";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styled.content}>
        <Letter />
        <Message />
        <Photos />
      </div>
    </>
  );
}

export default Home;
