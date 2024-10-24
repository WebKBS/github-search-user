import Section from "@/components/layouts/Section";
import SearchInput from "@/components/inputs/SearchInput";

export default function Home() {
  return (
    <main>
      <Section className="py-[80px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Try searching for Github users.
        </h1>
        <SearchInput />
      </Section>
    </main>
  );
}
