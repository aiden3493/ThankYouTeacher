import { motion } from "framer-motion";
import Router from "next/router";
import { useEffect, useState } from "react";
import styled from "../styles/password.module.css";

let IsPassWordCorrect = false;

function password() {
  const [correct, setCorrect] = useState<null | boolean>(null);
  const [currentPS, setCurrentPs] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const onChange = (e: any) => {
    e.preventDefault();
    if (e.target.value === "") {
      setCorrect(null);
    } else {
      setCurrentPs(e.target.value);
    }
  };

  const onEnter = (e: any) => {
    e.preventDefault();
    if (currentPS === "THKYT") {
      IsPassWordCorrect = true;
      setCorrect(true);
      Router.push(
        {
          pathname: "/TeacherToStudent",
          query: { PasswordCorrect: IsPassWordCorrect },
        },
        "/TeacherToStudent"
      );
    } else if (currentPS === "") {
      setCorrect(null);
    } else {
      IsPassWordCorrect = false;
      setCorrect(false);
    }
  };

  useEffect(() => setCorrect(null), []);

  return (
    <motion.div layout className={styled.content}>
      <motion.h3 className={styled.label}>비밀번호를 입력해 주세요</motion.h3>
      <motion.div
        layout
        className={styled.passwordForm}
        style={
          correct != null
            ? correct
              ? { boxShadow: "0px 0px 10px 4px rgb(70, 255, 100)" }
              : { boxShadow: "0px 0px 10px 3px rgb(255, 150, 150)" }
            : { boxShadow: "0px 0px 10px 3px gray" }
        }>
        <motion.input
          layout
          onChange={onChange}
          onSubmit={onSubmit}
          type='text'
          className={styled.passwordInput}
        />
        <motion.button layout onClick={onEnter} className={styled.enterBtn}>
          ENTER
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default password;
