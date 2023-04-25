import { useDispatch } from "react-redux";
import "./EditModal.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function EditModal({ toggleModal, postId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const post = posts.filter((p) => p.id == postId);
  console.log({ post });

  function editPost() {
    dispatch({
      type: "EDIT_POST",
      payload: { id: postId, title, content },
    });
    toggleModal();
  }

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <h3>Edit item</h3>

        <span>Title</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          //placeholder=""
          name={post[0].title}
        />

        <span>Content</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text-field"
          //placeholder=""
          //placeholder={post[0].content}
        />

        <div className="buttons-wrapper">
          <button onClick={toggleModal} className="cancel-button">
            Cancel
          </button>
          <button
            disabled={content === "" || title === ""}
            onClick={editPost}
            className="save-button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
