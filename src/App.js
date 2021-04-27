import logo from './logo.svg';
import './App.css';
import Header from './componens/Header/Header';
import Navbar from './componens/Navbar/Navbar';
import Profile from './componens/Profile/Profile';
import Dialogs from './componens/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.dialogsPage}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() =>
             <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() =>
             <Profile profliePage={props.state.profilePage} 
             addPost={props.addPost}
             updateNewPostText={props.updateNewPostText}/>} />
        </div>
      </div>
    );
}


export default App;
