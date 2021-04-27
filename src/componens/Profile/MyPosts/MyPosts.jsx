import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} ava={p.ava} />);
  
  let newPostElement = React.createRef();

  let AddPost = () => {
    props.addPost();
    

  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  return (
    <div className={s.postsBlock}>
      <h3>My post </h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={AddPost}>SAve</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;