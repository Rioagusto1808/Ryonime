"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
    const router =useRouter()
  const [isCreated, setIsCreated] = useState(false);
  const [comment, setComment] = useState("");
  const handleInput = (event) => {
    setComment(event.target.value);
  };
  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("")
      router.refresh()
    }
    return;
  };


  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p>Postingan Terkirim</p>}
      <textarea value={comment} className="w-full h-32 text-xl p-4" onChange={handleInput} />
      <button
        className="w-52 py-2 px-3 bg-color-accent"
        onClick={handlePosting}
      >
        Posting Komentar
      </button>
    </div>
  );
};

export default CommentInput;
