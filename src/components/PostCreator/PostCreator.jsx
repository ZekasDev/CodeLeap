import { useState } from "react";
import "./PostCreator.scss";
import { useDispatch, useSelector } from "react-redux";

export function PostCreator() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const username = useSelector((state) => state.username);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  function createPost() {
    if (title === "" || content === "") return;
    const post = {
      author: username,
      title,
      content,
      createdAt: Date.now()
    };
    dispatch({ type: "ADD_POST", payload: post });
  }

  return (
    <div className="postcreator-wrapper">
      <h3>What's on your mind?</h3>

      <span>Title</span>
      <input
        type="text"
        placeholder="Hello world"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <span>Content</span>
      <textarea
        type="text-field"
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button  disabled={content === "" || title === ""} onClick={createPost} className="primary-button">
        Create
      </button>
    </div>
  );
}
