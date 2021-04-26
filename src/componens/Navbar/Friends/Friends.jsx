import s from './../Friends/Friends.module.css';




const Friends = (props) => {
  return (

    <div >
      <div className={s.BestFriends}>
       <div className={s.FriendsName}>
       <img src={props.ava}></img>
         {props.name}
      
       </div> 
        
      </div>
    </div>
  );
}
export default Friends;