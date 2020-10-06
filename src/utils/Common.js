import React, { Fragment } from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Collapse from '@material-ui/core/Collapse';
import axios from 'axios';

import {
    BASE_URL,
    DEV_BASE_URL,
    CHECK_AUTH_STATE
} from './Constants';
import configureStore from '../store/configureStore';
import CookieStorage from '../utils/CookieStorage';


const store = configureStore();
const cookieStorage = new CookieStorage();

export const RenderResMsg = ({ type, msg, title = null }) => {
    return (
        <Fragment>
            {
                <Collapse in={!!msg}>
                    <Alert severity={type} className="flash-msg">
                        {
                            !!title ? <React.Fragment>
                                <AlertTitle>{title}</AlertTitle>
                                <small>{msg}</small>
                            </React.Fragment> : <p>{msg}</p>
                        }
                    </Alert>
                </Collapse>
            }
        </Fragment>
    );
}

export const forceRefreshToken = async (refreshToken, callback) => {
    try {
        const config = {
            method: 'post',
            url: `${DEV_BASE_URL}/refresh`,
            headers: {
                'Authorization': `Bearer ${refreshToken}`
            }
        }
        const res = await axios(config)
        const access_token = res.data.access_token;
        const payload = {
            access_token,
            refresh_token: refreshToken
        }
        console.log('==> ',payload)

        store.dispatch(callback(payload));
    } catch (e) {
        const error = e.response.data;
        console.log('----> ',e)
        console.log('--> ',e.response)
        
		switch(error.msg) {
			case 'Token has expired':
			case 'Token has been revoked':
			case 'Signature verification failed':
			case 'User not found!':
				store.dispatch({
					type: CHECK_AUTH_STATE,
					payload: {
                        user: null,
                        authenticated: false,
                        access_token: "",
                        refresh_token: ""
                    }
                })
                cookieStorage.eraseCookie('user')
				break;
			default:
				return;
		}
    }
}