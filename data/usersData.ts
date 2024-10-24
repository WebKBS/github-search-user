import { SearchUserList, User } from "@/types/userType";

export const getSearchUserList = async (): Promise<User[]> => {
  try {
    const response = await fetch(`https://api.github.com/users?per_page=20`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSearchedUsers = async (
  query: string,
): Promise<SearchUserList> => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return { total_count: 0, incomplete_results: false, items: [] };
  }
};
