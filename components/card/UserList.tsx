import UserItem from "@/components/card/UserItem";
import { User } from "@/types/userType";

const UserList = ({ data }: { data: User[] }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ul className="flex flex-col gap-6">
        {data.map((user) => (
          <UserItem
            id={user.id}
            avatar_url={user.avatar_url}
            login={user.login}
            html_url={user.html_url}
            key={user.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
