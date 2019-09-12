import  React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsItem = props.state.dialogs.map(el => (<DialogItem name={el.name} id={el.id} />));
    let messagesItems = props.state.messages.map(message => (<Message id= {message.id} text={message.massage}/>));

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={classes.messages}>
                {messagesItems}
            </div>
        </div>
    )
}

export default Dialogs;