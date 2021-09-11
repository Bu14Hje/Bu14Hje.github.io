import ReactDOM from 'react-dom';
import App from './App';
import bridge from '@vkontakte/vkui-connect-promise';
import React from "react";

bridge.send('VKWebAppInit', {})

setInterval (() => {
ReactDOM.render(<App/>, document.getElementById('root'))
},100);