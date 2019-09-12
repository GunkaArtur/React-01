import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
let posts = [
    { id: 0, massage: 'Hello it is my first post', countLikes: 15 },
    { id: 1, massage: 'oh what to write here', countLikes: 20 },
    { id: 2, massage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, nostrum?', countLikes: 22 },
    { id: 3, massage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', countLikes: 3 },
    { id: 4, massage: 'Lorem ipsum dolor sit amet', countLikes: 100},
];


ReactDOM.render(<App messages={messages} dialogs={dialogs} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
