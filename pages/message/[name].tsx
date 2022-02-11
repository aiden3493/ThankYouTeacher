import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";

function PersonalMessage() {
  const nameRouter = useRouter();
  const queryName = nameRouter.query.name?.toString()!;
  const [data, setData] = useState<any>([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    fetch(`${Router.basePath}/api/message`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.message);
        if (data != "") {
          const index = data.findIndex(
            (element: any) => element.id === queryName
          );
          const msgObject = data[index];

          setName(`${msgObject.Name}`);
          setMsg(`${msgObject.message}`);
        }
      });
  });

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
              marginLeft: "30px",
              marginRight: "30px",
              marginTop: "30px",
              fontSize: "20px",
              textAlign: "center",
              padding: "15px",
            }}>
            {msg}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default PersonalMessage;
