"use server";
import { NextRequest } from "next/server";
import { fetchGitHubData } from "@/data/server/fetchGithub";

export const GET = async (request: NextRequest) => {
  try {
    const username = request.nextUrl.searchParams.get("username") || "";
    const page = request.nextUrl.searchParams.get("page") || 1;

    let url: string;

    switch (username) {
      case "":
        url = `https://api.github.com/users?per_page=20&page=${page}`;
        break;
      default:
        url = `https://api.github.com/search/users?per_page=20&page=${page}&q=${username}+in:login`;
        break;
    }

    console.log(page);

    const data = await fetchGitHubData(url);
    // console.log(data);

    // query가 있으면 검색 결과의 items 배열만 반환
    return Response.json(username ? data.items : data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Failed to fetch data", { status: 500 });
  }
};
