import { User } from "@/types/userType";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { Bookmark } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface BookmarkButtonProps {
  user: User;
}

const BookmarkButton = ({ user }: BookmarkButtonProps) => {
  const bookmark = useBookmarkStore((state) => state.bookmark);
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

  const isBookmarked = bookmark.some((item) => item.id === user.id);

  const handleBookmark = () => {
    const message = isBookmarked ? "북마크에서 제거" : "북마크에 추가";

    toast(`${user.login}님을 ${message}했습니다.`, {
      description: bookmark.length + 1 + "개의 북마크가 있습니다.",
      action: {
        label: "닫기",
        onClick: () => {},
      },
    });

    toggleBookmark(user);
  };

  return (
    <button
      type="button"
      className="absolute right-4 top-4"
      onClick={handleBookmark}
    >
      <Bookmark size={24} fill={isBookmarked ? "red" : "none"} />
    </button>
  );
};

export default BookmarkButton;
