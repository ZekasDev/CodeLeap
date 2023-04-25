import { useDispatch } from "react-redux";
import "./DeleteModal.scss";

export default function DeleteModal({ toggleModal, postId }) {
  const dispatch = useDispatch();

  function deletePost() {
    dispatch({
      type: "DELETE_POST",
      payload: postId,
    });
    toggleModal();
  }

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <h3>Are you sure you want to delete this item?</h3>
        <div className="buttons-wrapper">
          <button onClick={toggleModal} className="cancel-button">
            Cancel
          </button>
          <button onClick={deletePost} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
