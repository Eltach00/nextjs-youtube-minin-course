import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello there!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo
        assumenda nihil reiciendis, beatae cupiditate repellendus rem amet
        cumque necessitatibus eveniet sapiente, dolorem ullam laboriosam quia
        sint dolor consequuntur id.
      </p>
      <p>
        <Link href={"about"}>About</Link>
      </p>
      <p>
        <Link href="posts">Posts</Link>
      </p>
    </>
  );
}
