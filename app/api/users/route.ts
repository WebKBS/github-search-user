"use server";
import { NextRequest } from "next/server";
import { fetchGitHubData } from "@/data/server/fetchGithub";

export const GET = async (request: NextRequest) => {
  const username = request.nextUrl.searchParams.get("username") || "";
  const page = request.nextUrl.searchParams.get("page") || 1;

  try {
    let url: string;

    // console.log(username);

    switch (username) {
      case "":
        url = `https://api.github.com/search/users?per_page=20&page=${page}&q=type:user`;
        break;
      default:
        url = `https://api.github.com/search/users?per_page=20&page=${page}&q=${username}+in:login`;
        break;
    }

    // console.log(url);

    const data = await fetchGitHubData(url);
    // console.log(data);

    // query가 있으면 검색 결과의 items 배열만 반환
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Failed to fetch data", { status: 500 });
  }
};
