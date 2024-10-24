import Image from "next/image";
import noProfileImage from "@/public/images/no-profile.png";
import UserName from "@/components/typography/UserName";
import Link from "next/link";
import { User } from "@/types/userType";
import { Bookmark } from "lucide-react";
import { shimmer, toBase64 } from "@/utils/imageSkeleton";

type UserItemProps = Pick<User, "id" | "avatar_url" | "login" | "html_url">;

const UserItem = ({ id, avatar_url, login, html_url }: UserItemProps) => {
  return (
    <li
      key={id}
      className="border p-4 rounded-md flex gap-6 relative items-center"
    >
      <div className="relative h-[64px] w-[64px] rounded-full overflow-hidden">
        {avatar_url ? (
          <Image
            src={avatar_url}
            alt={login}
            fill
            sizes={"10vw"}
            blurDataURL={avatar_url}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
          />
        ) : (
          <Image src={noProfileImage} alt={login} fill />
        )}
      </div>
      <div className="flex flex-col break-all gap-2">
        {login ? <UserName label={login} /> : <UserName label={"No Name"} />}
        {html_url ? (
          <Link
            target="_blank"
            rel="noopener noreferrer
                "
            href={html_url}
            className="hover:underline"
          >
            {html_url}
          </Link>
        ) : (
          <p>URL이 없습니다.</p>
        )}
      </div>
      <button type="button" className="absolute right-4 top-4">
        <Bookmark size={24} fill={""} />
      </button>
    </li>
  );
};

export default UserItem;
