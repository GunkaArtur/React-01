import  React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/'+props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

const Message =  (props) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Вася' id='1' />
                <DialogItem name='Ира' id='2' />
                <DialogItem name='Лена' id='3' />
                <DialogItem name='Ваня' id='4' />
            </div>
            <div className={classes.messages}>
                <Message text='Hello, my name is Johny'/>
                <Message text='How are you?'/>
                <Message text='I am comming from Germany'/>
                <Message text='I hate BMW'/>

            </div>
        </div>
    )
}

export default Dialogs;