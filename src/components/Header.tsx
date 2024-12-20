import { HomeIcon, File, UserRound } from "lucide-react";
import { NavButton } from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} label="Home" href="/home" />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block m-0 mt-1 text-lg font-bold">
              Dan&apos;s Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton icon={File} label="Projects" href="/tickets" />
          <NavButton icon={UserRound} label="About" href="/customers" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
