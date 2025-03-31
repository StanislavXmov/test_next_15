"use client";

// import { getCookie } from "./actions";

export function Cookie() {
  const handler = async () => {
    console.log("ACTIONS");
    // getCookie();
    // const res = await fetch("http://localhost:5000/set_cookie", {
    //   credentials: "include", // This is important for cookies
    // });
    // console.log(res.headers.getSetCookie());

    await fetch("http://localhost:3000/api/set-cookie");
  };
  return <button onClick={handler}>Get Cookie</button>;
}
