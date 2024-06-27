import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="w-full h-14 px-3 relative z-50 text-nowrap border-b border-text/15"
      aria-label="primaire navigatie"
    >
      <ul className="h-full max-w-screen-xl mx-auto flex items-center gap-6 font-semibold text-lg">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/stemtest/resultaten"}>resultaten</Link>
        </li>
        <li>
          <Link href={"/stemtest/vergelijk"}>vergelijken</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
