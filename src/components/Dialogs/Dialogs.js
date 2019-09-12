import  React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        { id: 0, name: 'Вася' },
        { id: 1, name: 'Ира' },
        { id: 2, name: 'Лена' },
        { id: 3, name: 'Ваня' },
        { id: 4, name: 'Маша' },
    ];
    let messages = [
        { id: 0, massage: 'Hello, my name is Johny' },
        { id: 1, massage: 'How are you?' },
        { id: 2, massage: 'I am comming from Germany' },
        { id: 3, massage: 'I hate BMW' },
        { id: 4, massage: 'Yo' },
    ];

    let dialogsItem = dialogs.map(el => (<DialogItem name={el.name} id={el.id} />));
    let messagesItems = messages.map(message => (<Message id= {message.id} text={message.massage}/>));



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