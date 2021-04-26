import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} ava={p.ava}/>);
  return (
    <div className={s.postsBlock}>
      <h3>My post </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>SAve</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;