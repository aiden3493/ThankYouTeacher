import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Router from "next/router";
import { useState } from "react";

function PersonalMessage() {
  const route = useRouter();
  const query = route.query;
  const name = query.Sname;
  const message = query.Smsg;
  console.log(`${message}`);

  const backToIndex = (e: any) => {
    e.preventDefault();
    Router.push("/", "/", { shallow: true });
  };
  return (
    <>
      <motion.div
        onClick={backToIndex}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          position: "absolute",
          zIndex: "1",
          cursor: "pointer",
        }}
      />
      <motion.div
        layout
        layoutId={`${query.name}`}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          position: "absolute",
          backgroundColor: "transparent",
          marginTop: "35px",
        }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}>
        <motion.div
          style={{
            display: "flex",
            width: "600px",
            height: "400px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0px 0px 15px gray",
            flexDirection: "column",
            position: "absolute",
            alignContent: "center",
            alignItems: "center",
          }}
          transition={{ type: "spring", bounce: 0.25 }}>
          <>
            <motion.h1
              style={{
                marginLeft: "30px",
                marginRight: "30px",
                marginTop: "30px",
                textAlign: "center",
              }}>
              {name}
            </motion.h1>
            <motion.p
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "5px",
                fontSize: "19px",
                textAlign: "center",
                paddingLeft: "10%",
                paddingRight: "10%",
              }}>
              {message}
            </motion.p>
          </>
        </motion.div>
      </motion.div>
    </>
  );
}

export default PersonalMessage;
