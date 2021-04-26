
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://vraki.net/sites/default/files/mood/m.jpg'></img>
      {props.message}
      
      <div>{props.likesCount} ♥ </div>

    </div>
  );
}
export default Post;