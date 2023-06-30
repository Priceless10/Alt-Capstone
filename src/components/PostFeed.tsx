import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { Article } from "./Article";

export interface PostFeedProps {
  id: string;
  title: string;
  author: {
    name: string;
    uid: string;
    profilePhoto: string;
  };
  content: string;
  coverPhoto: string;
  date: string;
}

export const PostFeed = () => {
  const [articles, setArticles] = useState<PostFeedProps[]>([]);

  useEffect(() => {
    const postCollectionRef = collection(db, "posts");
    const unsubscribe = onSnapshot(postCollectionRef, (snapshot) => {
      if (snapshot.size === 0) {
        setArticles([]);
        return;
      }

      const updatedArticles: PostFeedProps[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          author: {
            name: data.author.name,
            uid: data.uid,
            profilePhoto: data.author.photoURL,
          },
          content: data.content,
          coverPhoto: data.coverPhoto,
          date: new Date(data.date.toMillis()).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });

      setArticles(updatedArticles);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="mt-4">
      <div className="w-4/4 lg:w-4/5 z-10 mx-auto relative md:p-4">
        <Link
          to="/edit-new-post"
          className="w-[150px] font-semibold rounded-md relative md:left-[80%] left-[70%] top-[20px] md:top-[10px] text-sm p-2 border border-green-500 bg-green-500"
        >
          New article
        </Link>
        <div className=" w-[90%] ml-[5%]">
          <ul className="mt-8 flex justify-around text-sm  md:text-base font-semibold">
            <li>Personalized</li>
            <li>Featured</li>
            <li>Following</li>
          </ul>
        </div>
        <section className="p-4 border w-full md:w-[90%] mx-auto mt-4">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Article
                key={article.id}
                title={article.title}
                coverPhoto={article.coverPhoto}
                content={article.content}
                author={article.author}
                date={article.date}
                id=""
              />
            ))
          ) : (
            <p>No articles found.</p>
          )}
        </section>
      </div>
    </section>
  );
};
