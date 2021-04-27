import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {
    let newMessage = React.createRef();
  let AddMessage = () => {
    let textMessage = newMessage.current.value;
    alert(textMessage);
  }
    let messagesElements = props.state.messages.map(
        m => <Message message={m.message} />
    );
    let dialogsElements = props.state.dialogs.map
        (d => <DialogItem name={d.name} id={d.id} ava={d.ava} />);
    return (
        
        <div className={s.dialogs}>
            
            <div ClassName={s.dialogsItems}>
                
                {dialogsElements}
                
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
          <textarea ref={newMessage} ></textarea>
        </div>
        <div>
          <button onClick={AddMessage}>SAve</button>
        </div>
        </div>
    )
};

export default Dialogs;