import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    root: {...theme.absCenterDiv, position: 'fixed', backgroundColor: 'rgba(28, 2, 3, .7)', zIndex: 2000}
}))
const Loading = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <CircularProgress size={120}/>
        </div>
     );
}

export default Loading;