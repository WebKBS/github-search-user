import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-3 px-4">
        <Link href={"/"} className="font-bold text-2xl">
          SEARCH USERS
        </Link>
      </div>
    </header>
  );
};

export default Header;
