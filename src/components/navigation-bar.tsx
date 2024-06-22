import Link from "next/link";

import { navigationBarSection } from "@/styles/styles.css";

const NavigationBar = () => {
  return (
    <>
      <nav className={`${navigationBarSection} backdrop-blur-md`}>
        <h1 className="text-[24px] font-bold">
          <Link href={"/"}>Akane</Link>
        </h1>
        <div className="navBarLinks">
          <Link href={"/changelogs"}>Changelogs</Link>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
