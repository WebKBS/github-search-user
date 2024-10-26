import { User } from "@/types/userType";
import { useBookmarkStore } from "@/store/useBookmarkStore";
import { Bookmark } from "lucide-react";
import React from "react";

interface BookmarkButtonProps {
  user: User;
}

const BookmarkButton = ({ user }: BookmarkButtonProps) => {
  const bookmark = useBookmarkStore((state) => state.bookmark);
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);

  const isBookmarked = bookmark.some((item) => item.id === user.id);

  const handleBookmark = () => {
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
