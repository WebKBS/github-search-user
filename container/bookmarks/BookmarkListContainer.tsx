"use client";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import UserItem from "@/components/card/UserItem";

const BookmarkListContainer = () => {
  const bookmark = useBookmarkStore((state) => state.bookmark);

  if (bookmark.length === 0) {
    return <p>북마크한 유저가 없습니다.</p>;
  }

  return (
    <>
      <p>북마크한 유저 수: {bookmark.length.toLocaleString("ko-KR")}</p>
      <ul className="flex flex-col gap-4 mt-4">
        {bookmark.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default BookmarkListContainer;
