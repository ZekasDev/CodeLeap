import "./EditModal.scss";

export default function EditModal() {
  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <h3>Edit item</h3>

        <span>Title</span>
        <input type="text" placeholder="Hello world" />

        <span>Content</span>
        <textarea type="text-field" placeholder="Content here" />

        <div className="buttons-wrapper">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
