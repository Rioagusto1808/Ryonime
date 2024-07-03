import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";
import AuthUserSession from "@/libs/auth-libs";
const Navbar =  async() => {
  const user = await AuthUserSession()
  return (
    <header
      className="bg-color-accent
"
    >
      <div className="flex md:flex-row flex-col justify-between gap-2 p-4 lg:items-center">
        <Link href="/" className="font-bold text-white text-2xl">
          RYONIMEX
        </Link>
        {user ?
        <h3>Welcome Back, {user.name}</h3> : null
}
        <InputSearch/>
        <UserActionButton/>
      </div>
    </header>
  );
};
export default Navbar;
