import { PostCreator } from "../../components/PostCreator/PostCreator";
import { Post } from "../../components/Post/Post";
import "./MainScreen.scss";
import { useSelector } from "react-redux";

export function MainScreen() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="mainscreen-container">
      <div className="mainscreen-wrapper">
        <header>CodeLeap Network</header>

        <main className="content">
          <PostCreator />
          {posts.map((post, index) => {
            return <Post title={post.title} author={post.author} content={post.content} key={index} createdAt={post.createdAt}/>;
          })}
        </main>
      </div>
    </div>
  );
}
