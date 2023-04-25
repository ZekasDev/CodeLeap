import dayjs from "dayjs";
import EditIcon from "../../ui/Icons/EditIcon";
import TrashIcon from "../../ui/Icons/TrashIcon";
import "./Post.scss";

import { useSelector } from "react-redux";
import { useState } from "react";

import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function Post({ author, title, content, createdAt, id }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const username = useSelector((state) => state.username);

  function toggleDeleteModal() {
    setShowDeleteModal(prevValue => !prevValue)
  }

  function toggleEditModal() {
    setShowEditModal(prevValue => !prevValue)
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <h3>{title}</h3>
        {username === author && (
          <div className="post-header-icons">
            <div onClick={toggleDeleteModal}>
              <TrashIcon />
            </div>
            <div onClick={toggleEditModal}>
              <EditIcon />
            </div>
          </div>
        )}
      </div>
      <div className="post-content">
        <div className="content-info">
          <span>{author}</span>
          <span>{dayjs(createdAt).fromNow()}</span>
        </div>
        <p>{content}</p>
      </div>

      {showDeleteModal &&  <DeleteModal toggleModal={toggleDeleteModal} postId={id} />}
      {showEditModal && <EditModal toggleModal={toggleEditModal} postId={id}/>}
    </div>
  );
}
