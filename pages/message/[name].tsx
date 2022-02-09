import { motion } from "framer-motion";
import { useRouter } from "next/router";
import MSGdata from "../../components/messageData";
import Router from "next/router";

function PersonalMessage() {
  const nameRouter = useRouter();
  const queryName = nameRouter.query.name?.toString()!;
  const name = MSGdata[queryName]["name"];
  const MSG = MSGdata[queryName]["message"];

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
        layoutId={`${queryName}`}
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
            height: "700px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0px 0px 15px gray",
            flexDirection: "column",
            position: "absolute",
          }}
          transition={{ type: "spring", bounce: 0.25 }}>
          <motion.h1 style={{ marginLeft: "30px", marginTop: "30px" }}>
            {name}
          </motion.h1>
          <motion.p
            style={{ marginLeft: "30px", marginTop: "30px", fontSize: "23px" }}>
            {MSG}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default PersonalMessage;
