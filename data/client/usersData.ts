import { User } from "@/types/userType";

export const getSearchUserList = async ({
  username,
  page = 1,
}: {
  username?: string;
  page: number;
}): Promise<User[]> => {
  let url: string;

  switch (username) {
    case "":
      url = `/api/users?page=${page}`;
      break;
    default:
      url = `/api/users?username=${username}&page=${page}`;
  }

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // console.log(await response.json());
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
