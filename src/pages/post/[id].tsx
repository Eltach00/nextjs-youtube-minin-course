import { MainLayout } from "@/components/main-layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post({ data: serverData }) {
  const [post, setPost] = useState(serverData);
  const router = useRouter();
  useEffect(() => {
    async function load() {
      const response = await fetch(
        "http://localhost:4200/posts/" + router.query.id
      );
      const data = await response.json();
      setPost(data);
    }
    if (!serverData) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <h1>Loading ...</h1>
      </MainLayout>
    );
  }

  return (
    <>
      <h1> {post.title} </h1>
      <hr />
      <p> {post.author}</p>
    </>
  );
}

// Post.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { data: null };
//   }
//   const response = await fetch("http://localhost:4200/posts/" + query.id);
//   const data = await response.json();

//   return {
//     data,
//   };
// };
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await fetch("http://localhost:4200/posts/" + query.id);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
