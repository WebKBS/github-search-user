import UserItem from "@/components/card/UserItem";
import { getSearchedUsers } from "@/data/usersData";

const UserList = async () => {
  const data = await getSearchedUsers("nomard");

  return (
    <div className="max-w-2xl mx-auto">
      <ul className="flex flex-col gap-6">
        {data.items.map((user) => (
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
