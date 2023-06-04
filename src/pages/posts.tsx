import { MainLayout } from "@/components/main-layout";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

export default function Posts({ data: serverData }) {
  const [posts, setPosts] = useState(serverData);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const data = await response.json();
      setPosts(data);
    }
    if (!serverData) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <h1>Loading ...</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>Posts pages</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={"/post/" + post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          Router.push("/");
        }}>
        Back to home
      </button>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { data: null };
  }
  const response = await fetch("http://localhost:4200/posts");
  const data = await response.json();

  return {
    data,
  };
};
