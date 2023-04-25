import { PostCreator } from "../../components/PostCreator/PostCreator";
import { Post } from "../../components/Post/Post";
import "./MainScreen.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";


export function MainScreen() {
  const posts = useSelector((state) => state.posts);
  const username = useSelector((state) => state.username)
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [username])
  

  return (
    <div className="mainscreen-container">
      <div className="mainscreen-wrapper">
        <header>CodeLeap Network</header>
      

        <main className="content">
          <PostCreator />
          {posts.map((post, index) => {
            return <Post title={post.title} author={post.author} content={post.content} key={index} createdAt={post.createdAt} id={post.id}/>;
          })}
        </main>
      </div>
    </div>
  );
}
