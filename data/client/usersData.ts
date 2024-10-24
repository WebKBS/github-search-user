import { User } from "@/types/userType";

export const getSearchUserList = async ({
  query,
}: {
  query: string;
}): Promise<User[]> => {
  let url: string;

  switch (query) {
    case "":
      url = "/api/users";
      break;
    default:
      url = `/api/users?username=${query}`;
  }

  try {
    const response = await fetch(url, {
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
