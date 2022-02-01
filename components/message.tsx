import styled from "../styles/message.module.css";
import { motion } from "framer-motion";
import MessageBox from "./messageBox";

function message() {
  return (
    <div className={styled.message}>
      <h1>test</h1>
      <div className={styled.messageBoxes}>
        <MessageBox value='1-1' />
        <MessageBox value='1-2' />
        <MessageBox value='1-3' />
        <MessageBox value='1-4' />
        <MessageBox value='1-5' />
      </div>
      <div className={styled.messageBoxes}>
        <MessageBox value='2-1' />
        <MessageBox value='2-2' />
        <MessageBox value='2-3' />
        <MessageBox value='2-4' />
        <MessageBox value='2-5' />
      </div>
      <div className={styled.messageBoxes}>
        <MessageBox value='3-1' />
        <MessageBox value='3-2' />
        <MessageBox value='3-3' />
        <MessageBox value='3-4' />
        <MessageBox value='3-5' />
      </div>
      <div className={styled.messageBoxes}>
        <MessageBox value='4-1' />
        <MessageBox value='4-2' />
        <MessageBox value='4-3' />
        <MessageBox value='4-4' />
        <MessageBox value='4-5' />
      </div>
    </div>
  );
}

export default message;
