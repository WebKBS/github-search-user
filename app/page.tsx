import Section from "@/components/layouts/Section";
import SearchInput from "@/components/inputs/SearchInput";

import HomeSearchListContainer from "@/container/home/HomeSearchListContainer";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Section className="py-[80px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Try searching for Github users.
        </h1>
        <SearchInput />
      </Section>
      <Section className="pb-[120px]">
        <Suspense fallback={<div>Loading...</div>}>
          <HomeSearchListContainer />
        </Suspense>
      </Section>
    </main>
  );
}
