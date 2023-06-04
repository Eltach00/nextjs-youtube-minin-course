import Router from "next/router";

export default function Posts() {
  return (
    <>
      <h1>Posts pages</h1>
      <button
        onClick={() => {
          Router.push("/");
        }}>
        Back to home
      </button>
    </>
  );
}
