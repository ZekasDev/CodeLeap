import { useDispatch } from "react-redux";
import "./EditModal.scss";
import { useState } from "react";

export default function EditModal({ toggleModal, postId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
          placeholder="Hello world"
        />

        <span>Content</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text-field"
          placeholder="Content here"
        />

        <div className="buttons-wrapper">
          <button onClick={toggleModal} className="cancel-button">
            Cancel
          </button>
          <button disabled={content === "" || title === ""} onClick={editPost} className="save-button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
