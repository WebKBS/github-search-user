'use client';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {useRef} from "react";
import {usePathname, useRouter} from "next/navigation";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // 검색어가 없을 경우 return - 공백 포함
    if (!inputRef.current?.value.trim()) {
      return router.push(pathname);
    }

    router.push(
      `${pathname}?username=${inputRef.current.value}`
    );
  };



  return (
    <form action="">
      <div className="max-w-3xl mx-auto relative">
        <Input
          type="search"
          className="h-[48px] text-xl border-white/50 pr-[50px]"
          placeholder="username"
          name="username"
          autoComplete={"off"}
          ref={inputRef}
        />
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center"
          onClick={handleSearch}
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
