import dayjs from "dayjs";
import EditIcon from "../../ui/Icons/EditIcon";
import TrashIcon from "../../ui/Icons/TrashIcon";
import "./Post.scss";

import { useSelector } from "react-redux";

import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function Post({ author, title, content, createdAt }) {
  const username = useSelector((state) => state.username);
  return (
    <div className="post-container">
      <div className="post-header">
        <h3>{title}</h3>
        {username === author && <div className="post-header-icons">
          <TrashIcon />
          <EditIcon />
        </div>}
      </div>
      <div className="post-content">
        <div className="content-info">
          <span>{author}</span>
          <span>{dayjs(createdAt).fromNow()}</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}
