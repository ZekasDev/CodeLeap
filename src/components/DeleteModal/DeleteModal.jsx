import "./DeleteModal.scss"

export default function DeleteModal() {
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <h3>Are you sure you want to delete this item?</h3>
        <div className="buttons-wrapper">
            <button className="cancel-button">Cancel</button>
            <button className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
