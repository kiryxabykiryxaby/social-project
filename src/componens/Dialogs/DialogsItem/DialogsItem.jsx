import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div ClassName={s.dialog}>
            <div className={s.dialogE}>
            <NavLink to={path}>  {props.name} </NavLink>
            <div className={s.AvaD}><img src={props.ava}></img> 
           
            </div>
        </div>
        </div>
    )
};
export default DialogItem;
