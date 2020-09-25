import React from 'react'
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

import { clearMsg } from '../actions/resMsg';


const RenderResMsg = ({ type, msg, clearMsg }) => {
    const [renderMsg, setMsg] = React.useState(true);

	setTimeout(
		() => {
            setMsg(false)
            clearMsg()
		}, 10000
	)

    return (
        <React.Fragment>
            {
                (renderMsg || !!msg) ? <Alert severity={type} className="error-res">{msg}</Alert> : ''
            }
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch) => ({
    clearMsg: () => dispatch(clearMsg())
})

export default connect(null, mapDispatchToProps)(RenderResMsg)