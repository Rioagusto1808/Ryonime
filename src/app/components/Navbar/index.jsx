import Link from "next/link";
import InputSearch from "./InputSearch";
const Navbar = () => {
  return (
    <header
      className="bg-color-accent
"
    >
      <div className="flex md:flex-row flex-col justify-between gap-2 p-4 md:items-center">
        <Link href="/" className="font-bold text-white text-2xl">
          RYONIMEX
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};
export default Navbar;
