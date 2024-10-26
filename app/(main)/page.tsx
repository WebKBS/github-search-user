import Section from "@/components/layouts/Section";
import SearchInput from "@/components/inputs/SearchInput";

import HomeSearchListContainer from "@/container/home/HomeSearchListContainer";
import { Suspense } from "react";
import UserItemSkeleton from "@/components/skeleton/UserItemSkeleton";
import ScrollTopButton from "@/components/buttons/ScrollTopButton";

export default function Home() {
  return (
    <main>
      <Section className="py-[80px] max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          Try searching for Github users.
        </h1>
        <SearchInput />
      </Section>
      <Section className="pb-[120px] max-w-2xl">
        <Suspense fallback={<UserItemSkeleton />}>
          <HomeSearchListContainer />
        </Suspense>
      </Section>
      <ScrollTopButton />
    </main>
  );
}
