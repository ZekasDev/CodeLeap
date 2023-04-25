import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EditModal.scss";

export default function EditModal({ toggleModal, postId, postTitle, postContent }) {
  const [title, setTitle] = useState(postTitle);
  const [content, setContent] = useState(postContent);
  const dispatch = useDispatch();
  

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
        />

        <span>Content</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text-field"
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
