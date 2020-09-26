import React, { Fragment } from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Collapse from '@material-ui/core/Collapse';
import axios from 'axios';

import { BASE_URL, DEV_BASE_URL } from './Constants';


export const RenderResMsg = ({ type, msg, title=null }) => {
    return (
        <Fragment>
            {
                <Collapse in={!!msg}>
                    <Alert severity={type} className="flash-msg">
                        {
                            !!title ? <React.Fragment>
                                <AlertTitle>{title}</AlertTitle>
                                <small>{msg}</small>
                            </React.Fragment> : msg
                        }
                    </Alert>
                </Collapse>
            }
        </Fragment>
    );
}

export const forceRefreshToken = async (refreshToken, callback) => {
    try {
        const headers = {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${refreshToken}`
        }
        const res = await axios.get(`${DEV_BASE_URL}/refresh`, { headers })
        const accessToken = res.access_token;
        
        callback({
            access_token: accessToken,
            refresh_token: refreshToken
        });
    } catch (e) {
        const error = e.response.data;

        console.log(error);
    }
}