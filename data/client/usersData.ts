import { User } from "@/types/userType";

export const getSearchUserList = async ({
  query,
  page = 1,
}: {
  query?: string;
  page: number;
}): Promise<User[]> => {
  let url: string;

  switch (query) {
    case "":
      url = `/api/users?page=${page}`;
      break;
    default:
      url = `/api/users?username=${query}&page=${page}`;
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
