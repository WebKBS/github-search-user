"use client";
import UserList from "@/components/card/UserList";
import { useQuery } from "@tanstack/react-query";
import { getSearchUserList } from "@/data/client/usersData";
import { User } from "@/types/userType";
import { useSearchParams } from "next/navigation";

const HomeSearchListContainer = () => {
  const serachParams = useSearchParams();
  const query = serachParams.get("username") || "";

  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["searchedUsers", query],
    queryFn: () => getSearchUserList({ query }),
    staleTime: 0,
  });

  console.log(data);

  if (!data) return null;

  if (data.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <p>검색 결과가 없습니다.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <p>에러가 발생했습니다.</p>
      </div>
    );
  }

  return <UserList data={data} />;
};

export default HomeSearchListContainer;
