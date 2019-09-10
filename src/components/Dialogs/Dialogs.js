import  React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Вася</div>
                <div className={classes.dialog}>Петя</div>
                <div className={classes.dialog}>Марина</div>
                <div className={classes.dialog}>Ира</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>blabla0</div>
                <div className={classes.message}>blabla1</div>
                <div className={classes.message}>blabla2</div>
                <div className={classes.message}>blabla3</div>
            </div>
        </div>
    )
}

export default Dialogs;