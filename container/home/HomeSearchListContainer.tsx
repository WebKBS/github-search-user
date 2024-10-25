"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchUserList } from "@/data/client/usersData";
import { SearchUserList } from "@/types/userType";
import { useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import UserItem from "@/components/card/UserItem";

const HomeSearchListContainer = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("username") || "";
  const [ref, inView] = useInView();

  const {
    data,
    isPending,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery<SearchUserList>({
    queryKey: ["searchedUsers", username],
    queryFn: ({ pageParam }) =>
      getSearchUserList({ username, page: pageParam as number }),
    getNextPageParam: (lastPage, allPages) => {
      // lastPage의 길이가 0이면 undefined 반환
      if (lastPage.items.length === 0) {
        return undefined;
      }
      // 데이터가 있으면 다음 페이지 번호 반환
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <p>Error fetching data {error.message}</p>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <p>Loading...</p>
      </div>
    );
  }

  const totalCount = data?.pages.map((page) => page.total_count);

  // console.log(data);

  const content = data?.pages.map((page) =>
    page.items.map((user) => (
      <UserItem
        ref={ref}
        avatar_url={user.avatar_url}
        login={user.login}
        html_url={user.html_url}
        key={user.id}
      />
    )),
  );

  return (
    <div className="max-w-2xl mx-auto">
      <p className="mb-4">
        검색된 유저 수: {totalCount?.toLocaleString("ko-KR")}
      </p>
      <ul className="flex flex-col gap-6">{content}</ul>
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};

export default HomeSearchListContainer;
