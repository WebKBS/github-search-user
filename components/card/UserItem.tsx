import Image from "next/image";
import noProfileImage from "@/public/images/no-profile.png";
import UserName from "@/components/typography/UserName";
import Link from "next/link";
import { User } from "@/types/userType";
import { Bookmark } from "lucide-react";

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
            placeholder={"blur"}
          />
        ) : (
          <Image src={noProfileImage} alt={login} fill />
        )}
      </div>
      <div className="flex flex-col break-all">
        {login ? <UserName label={login} /> : <UserName label={"No Name"} />}
        {html_url ? (
          <Link
            target="_blank"
            rel="noopener noreferrer
                "
            href={html_url}
          >
            {html_url}
          </Link>
        ) : (
          <p>URL이 없습니다.</p>
        )}
      </div>
      <button type="button" className="absolute right-4 top-4">
        <Bookmark size={24} />
      </button>
    </li>
  );
};

export default UserItem;
