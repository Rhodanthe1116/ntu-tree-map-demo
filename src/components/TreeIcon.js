import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as TreeSvg } from '../img/tree.svg';

const useStyles = makeStyles({

    marker: {
        cursor: 'pointer',
    },
})


function TreeIcon(props) {
    return (
        <SvgIcon
            component={TreeSvg}
            viewBox="0 0 600 476.6"
            {...props}
        />
    )
}

export default TreeIcon