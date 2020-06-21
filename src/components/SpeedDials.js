import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    speedDial: {
        margin: theme.spacing(1),
    },
    backdrop: {
        zIndex: theme.zIndex.speedDial + 1,
        pointerEvents: 'none',
    },
}));

const speedDialSelected = {
    zIndex: 1052,
}

export default function SpeedDials({ icon, actions }) {
    const classes = useStyles();
    const [direction, setDirection] = React.useState('right');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleClose = () => {
        setOpen(false);

    };

    const handleOpen = () => {
        setOpen(true);
    };

    function FABChildren() {
        return (
            <h5>
                sdfsd
            </h5>
        )
    }
    return (
        <>
            <Backdrop
                className={classes.backdrop}
                open={open}
            />
            <SpeedDial
                ariaLabel="SpeedDial example"
                className={classes.speedDial}
                style={open ? speedDialSelected : null}
                hidden={hidden}
                icon={icon}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={direction}
                FabProps={{
                    variant: true ? "extended" : "round",
                    children: "asdsadasd",
                    color: 'primary',
                }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>

        </>
    );
}

SpeedDials.defaultProps = {
    actions: [],
}