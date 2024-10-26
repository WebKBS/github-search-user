import Section from "@/components/layouts/Section";
import BookmarkListContainer from "@/container/bookmarks/BookmarkListContainer";
import ScrollTopButton from "@/components/buttons/ScrollTopButton";

const BookMarkPage = () => {
  return (
    <main>
      <Section className="py-[80px] max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">BOOKMARK</h1>
      </Section>
      <Section className="pb-[120px] max-w-2xl">
        <BookmarkListContainer />
      </Section>
      <ScrollTopButton />
    </main>
  );
};

export default BookMarkPage;
