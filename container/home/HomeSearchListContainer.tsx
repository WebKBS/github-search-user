"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchUserList } from "@/data/client/usersData";
import { User } from "@/types/userType";
import { useSearchParams } from "next/navigation";
import UserItem from "@/components/card/UserItem";

const HomeSearchListContainer = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("username") || "";

  const { data, isFetching } = useInfiniteQuery<User[]>({
    queryKey: ["searchedUsers"],
    queryFn: () => getSearchUserList({ query }),
    getNextPageParam: (lastPage) => {
      return lastPage;
    },

    initialPageParam: 1,
  });

  console.log(data);

  if (isFetching) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <p>Fetching...</p>
      </div>
    );
  }

  const content = data?.pages.map((page) =>
    page.map((user) => (
      <UserItem
        avatar_url={user.avatar_url}
        login={user.login}
        html_url={user.html_url}
        key={user.id}
      />
    )),
  );

  return (
    <div className="max-w-2xl mx-auto">
      <ul className="flex flex-col gap-6">{content}</ul>
    </div>
  );
};

export default HomeSearchListContainer;
