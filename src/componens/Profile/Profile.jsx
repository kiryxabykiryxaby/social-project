import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile =  (props) => {
 
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profliePage.posts}
      newPostText ={props.profliePage.newPostText}
      updateNewPostText ={props.updateNewPostText}
      addPost={props.addPost}/>
     
    </div>
   
  );
}

export default Profile;