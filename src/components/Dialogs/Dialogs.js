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

    let dialogsData = [
        { id: 0, name: 'Вася' },
        { id: 1, name: 'Ира' },
        { id: 2, name: 'Лена' },
        { id: 3, name: 'Ваня' },
        { id: 4, name: 'Маша' },
    ];

    let messagesData = [
        { id: 0, massage: 'Hello, my name is Johny' },
        { id: 1, massage: 'How are you?' },
        { id: 2, massage: 'I am comming from Germany' },
        { id: 3, massage: 'I hate BMW' },
        { id: 4, massage: 'Yo' },
    ];

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

            </div>
            <div className={classes.messages}>
                <Message id= {messagesData[0].id} text={messagesData[0].massage}/>
                <Message id= {messagesData[1].id} text={messagesData[1].massage}/>
                <Message id= {messagesData[2].id} text={messagesData[2].massage}/>
                <Message id= {messagesData[3].id} text={messagesData[3].massage}/>
                <Message id= {messagesData[4].id} text={messagesData[4].massage}/>

            </div>
        </div>
    )
}

export default Dialogs;