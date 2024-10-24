import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <form action="">
      <div className="max-w-3xl mx-auto relative">
        <Input
          type="search"
          className="h-[48px] text-xl border-white/50 pr-[50px]"
          placeholder="username"
          name="username"
          autoComplete={"off"}
        />
        <button
          type="button"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center"
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
