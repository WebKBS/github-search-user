"use client";
import UserItem from "@/components/card/UserItem";
import { getSearchUserList } from "@/data/client/usersData";
import { SearchUserList } from "@/types/userType";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    staleTime: 1000 * 60 * 5, // 5분
    initialPageParam: 1,
    gcTime: 1000 * 60 * 5, // 5분
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) {
    return <p>Error fetching data {error.message}</p>;
  }

  if (isPending) {
    return <p>Loading...</p>;
  }

  const totalCount = data?.pages[0]?.total_count || 0;

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
    <div>
      <p className="mb-4">
        검색된 유저 수: {totalCount?.toLocaleString("ko-KR")}
      </p>
      <ul className="flex flex-col gap-6 mt-4">{content}</ul>
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};

export default HomeSearchListContainer;
