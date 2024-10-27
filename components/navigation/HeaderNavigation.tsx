"use client";

import { navigationData } from "@/constants/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const HeaderNavigation = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-6 items-center">
      {navigationData.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            className={cn(
              "text-xl uppercase hover:text-blue-500/60",
              pathname === item.href ? "text-blue-500" : "text-gray-400",
            )}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavigation;
