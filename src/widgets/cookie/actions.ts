"use server";
import { cookies } from "next/headers";

export async function getCookie() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");

  console.log({ user });

  const res = await fetch("http://localhost:5000/set_cookie");
  console.log(res.headers.getSetCookie());
}
