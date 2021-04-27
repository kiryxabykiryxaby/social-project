import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';





const Navbar = (props) => {
  
  
  let FriendsElements = props.state.dialogs.map(
    f => <Friends ava={f.ava} name={f.name} />
);

  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}> <NavLink to='/profile' activeClassName={s.active} >PROFILE </NavLink></div>
      <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages </NavLink></div>
      <div className={s.item}><a href="#">News </a></div>
      <div className={s.item}><a href="#">Setings </a></div>
      <h3> FRIENDS</h3>     
      {FriendsElements}
    
    </nav>
    

  );
} 
export default Navbar;