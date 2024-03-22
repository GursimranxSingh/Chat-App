// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const [count, setCount] = useState(0);
//   const [runningTime, setRunningTime] = useState(false);
//   const [timer, setTimer] = useState(null);

//   const runtime = () => {
//     setTimer(
//       setInterval(() => {
//         setCount((prevTime) => prevTime + 1);
//       }, 1000)
//     );
//   };

//   const handleStart = () => {
//     setRunningTime(true);
//     runtime();
//   };

//   const handleStop = () => {
//     setCount(0);
//     setRunningTime(false);
//     setTimer(null);
//     clearInterval(timer);
//   };

//   const handleRemove = () => {
//     setRunningTime(false);
//     clearInterval(timer);
//   };

//   return (
//     <>
//       <div>
//         <p>{count}</p>
//       </div>
//       <button onClick={handleStart}>start</button>
//       <br />
//       <hr />
//       <button onClick={handleStop}>reset</button>
//       <br />
//       <hr />
//       <button onClick={handleRemove}>stop</button>
//     </>
//   );
// };

// export default Home;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { VscSend } from "react-icons/vsc";
const Home = () => {
  const chat = [
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" },
    { name: "Rahul", chat: "chat" }
  ];
  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        <Container>
          <Row>
            <Col lg={4} style={{ paddingRight: "0px", marginRight: "0px" }}>
            {chat.map
              ((item, index)=> {
              return (
<>

              <div style={{ backgroundColor: "#fff" }} key={index}>
                {item.name}
                {item.chat}
              </div>
</>
              )
            })}
            </Col>
            <Col lg={8} style={{ paddingLeft: "0px", marginLeft: "0px" }}>
              <div className="maininput-div">
                <div className="main-input">
                  <input
                    type="text"
                    placeholder="Type here...."
                    className="input-pu"
                  />
                  <button className="butt-on">
                    <VscSend className="sendicon" />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
