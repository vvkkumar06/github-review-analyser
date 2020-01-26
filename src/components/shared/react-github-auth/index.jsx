import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function ReactGithubAuth(props) {
    return (
        <button onClick={() => onLogin(props)}>
            {props.title}
        </button>
    );
}

const onLogin = async (props) => {
    const { onSuccess, onFailure, client_id, client_secret, width, height, title } = props;
    let authWindow = popupWindow(`https://github.com/login/oauth/authorize?client_id=${client_id}`, title, width, height);
    let code;
    let state
    let codeCheck = setInterval(() => {
        try {
            const params = new URL(authWindow.location).searchParams;
            code = params.get('code');
            state = params.get('state');
            if (!code) {
                return;
            }
            clearInterval(codeCheck);

            authWindow.close();
            onSuccess({ code, state });
        } catch (err) {
            onFailure(err)
        }
    }, 20);
}


const popupWindow = (url, title, w, h) => {
    var left = (window.screen.width / 2) - (w / 2);
    var top = (window.screen.height / 2) - (h / 2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}


export default ReactGithubAuth;