import Link from "next/link";
import { ReactNode } from "react";

export function MainLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <nav>
        <Link href={"about"}>About</Link>
        <Link href="posts">Posts</Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        main {
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}
