import React, { useEffect, useState } from "react";
// import { QRCodeCanvas } from "qrcode.react";
// import openSocket from "socket.io-client";

const QRCodeScanner = () => {
  const [socketId, setSocketId] = useState("");

//   useEffect(() => {
//     if(socketId !== null){
//         const socket = openSocket(process.env.NEXT_PUBLIC_SOCKET_URL);
//         socket.on("initialize", (socketId) => {
//           setSocketId(socketId);
//         });
//         socket.on("code_varified", ({ accessToken, refreshToken }) => {
//           setSession({ access_token: accessToken, refresh_token: refreshToken });
//           refreshTokenFun(true);
//         });
//     }
//   }, []);

  return (
    <div
      style={{
        backgroundColor: "#e5f6ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <div>
        <QRCodeCanvas
          value={socketId}
          size={200}
          bgColor={"white"}
          level={"H"}
        />
      </div> */}
    </div>
  );
};

export default QRCodeScanner;
