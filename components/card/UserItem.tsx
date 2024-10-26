import Image from "next/image";
import noProfileImage from "@/public/images/no-profile.png";
import UserName from "@/components/typography/UserName";
import Link from "next/link";
import { User } from "@/types/userType";
import { shimmer, toBase64 } from "@/utils/imageSkeleton";
import React from "react";
import BookmarkButton from "@/components/buttons/BookmarkButton";

type UserItemProps = {
  user: User;
};

const UserItem = React.forwardRef<HTMLLIElement, UserItemProps>(
  ({ user }, ref) => {
    return (
      <li
        ref={ref}
        className="border p-4 rounded-md flex gap-6 relative items-center"
      >
        <div className="relative h-[64px] w-[64px] rounded-full overflow-hidden">
          {user.avatar_url ? (
            <Image
              src={user.avatar_url}
              alt={user.login}
              fill
              sizes={"10vw"}
              blurDataURL={user.avatar_url}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
            />
          ) : (
            <Image src={noProfileImage} alt={user.login} fill />
          )}
        </div>
        <div className="flex flex-col break-all gap-2">
          {user.login ? (
            <UserName label={user.login} />
          ) : (
            <UserName label={"No Name"} />
          )}
          {user.html_url ? (
            <Link
              target="_blank"
              rel="noopener noreferrer
                "
              href={user.html_url}
              className="hover:underline"
            >
              {user.html_url}
            </Link>
          ) : (
            <p>URL이 없습니다.</p>
          )}
        </div>
        <BookmarkButton user={user} />
      </li>
    );
  },
);

UserItem.displayName = "UserItem";

export default UserItem;
