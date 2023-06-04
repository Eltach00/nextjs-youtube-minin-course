import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <h1>Post {router.query.postId}</h1>
    </>
  );
}
