"use server";
import { NextRequest } from "next/server";
import { fetchGitHubData } from "@/data/server/fetchGithub";

export const GET = async (request: NextRequest) => {
  try {
    const query = request.nextUrl.searchParams.get("username") || "";

    let url: string;

    switch (query) {
      case "":
        url = `https://api.github.com/users?per_page=20`;
        break;
      default:
        url = `https://api.github.com/search/users?per_page=20&q=${query}+in:login`;
        break;
    }

    console.log(url);

    const data = await fetchGitHubData(url);

    // query가 있으면 검색 결과의 items 배열만 반환
    return Response.json(query ? data.items : data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Failed to fetch data", { status: 500 });
  }
};
