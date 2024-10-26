import Link from "next/link";
import HeaderNavigation from "@/components/navigation/HeaderNavigation";

import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Header = () => {
  return (
    <header className={bungee.className}>
      <div className="container mx-auto py-3 px-4 flex gap-4 flex-wrap items-center justify-between">
        <Link href={"/"} className="font-bold text-2xl">
          SEARCH USERS
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
