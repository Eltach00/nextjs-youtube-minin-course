import { MainLayout } from "@/components/main-layout";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/posts");
      const data = await response.json();
      setPosts(data);
    }
    load();
  }, []);
  console.log(posts);

  return (
    <MainLayout>
      <h1>Posts pages</h1>
      <button
        onClick={() => {
          Router.push("/");
        }}>
        Back to home
      </button>
    </MainLayout>
  );
}
