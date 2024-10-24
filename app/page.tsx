import Section from "@/components/layouts/Section";
import SearchInput from "@/components/inputs/SearchInput";
import { getSearchedUsers, getSearchUserList } from "@/data/usersData";

export default async function Home() {
  const data = await getSearchedUsers("kim");
  console.log(data);

  return (
    <main>
      {data.items.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
        </div>
      ))}

      <Section className="py-[80px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Try searching for Github users.
        </h1>
        <SearchInput />
      </Section>
    </main>
  );
}
