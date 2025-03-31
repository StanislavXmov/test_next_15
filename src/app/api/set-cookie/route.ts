import { NextResponse } from "next/server";

export async function GET() {
  console.log("SET_COOKIE");

  const res = await fetch("http://localhost:5000/set_cookie");
  console.log(res.headers.getSetCookie());

  // Получаем заголовок Set-Cookie
  const setCookieHeaders = res.headers.getSetCookie();
  console.log("Raw Set-Cookie:", setCookieHeaders);
  const cookie = setCookieHeaders.find((c) => c.includes("user"));

  const response = NextResponse.json({ message: "Кука установлена" });

  if (cookie) {
    const cookieParts = cookie.split(";").map((part) => part.trim());
    const nameValue = cookieParts[0].split("=");
    const name = nameValue[0];
    const value = nameValue[1];
    response.cookies.set({
      name,
      value,
      httpOnly: true, // Безопасность: доступ только серверу
      path: "/", // Доступна на всём сайте
      maxAge: 60 * 60 * 24, // 1 день в секундах
    });
  }

  return response;
}
