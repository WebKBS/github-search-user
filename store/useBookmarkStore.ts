import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { User } from "@/types/userType";

interface IUseBookmarkStore {
  bookmark: User[]; // 북마크 유저
  toggleBookmark: (user: User) => void; // 북마크 토글
}

/**
 * 북마크 저장 스토어
 */
export const useBookmarkStore = create<IUseBookmarkStore>()(
  persist(
    (set, get) => ({
      bookmark: [],
      toggleBookmark: (user: User) => {
        const bookmark = get().bookmark;
        const isLiked = bookmark.some((likedBook) => likedBook.id === user.id);
        if (isLiked) {
          // 이미 북마크한 상태라면 북마크 취소
          set({
            bookmark: bookmark.filter((likedBook) => likedBook.id !== user.id),
          });
        } else {
          // 새로운 북마크라면 북마크 추가
          set({
            bookmark: [...bookmark, user],
          });
        }
      },
    }),
    {
      name: "bookmark",
      storage: createJSONStorage(() => localStorage), // 로컬 스토리지에 저장
    },
  ),
);
