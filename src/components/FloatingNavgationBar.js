import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import NatureIcon from '@material-ui/icons/NatureOutlined'
import LocationCityIcon from '@material-ui/icons/LocationCityOutlined';
import Fab from '@material-ui/core/Fab';

// season icons
import EcoIcon from '@material-ui/icons/EcoOutlined';
import SpaIcon from '@material-ui/icons/SpaOutlined';
import WbSunnyIcon from '@material-ui/icons/WbSunnyOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnitOutlined';

import Zoom from '@material-ui/core/Zoom';

// my components
import SpeedDials from './SpeedDials'

const useStyles = makeStyles((theme) => ({
    title: {
        zIndex: 100,
        color: '#ffffff',
    },
    floatingNavgationBar: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },

}));

export default function FloatingNavgationBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    return (
        <div className={classes.floatingNavgationBar}>
            <Zoom
                in={true}
            >
                <Fab variant="extended" color="primary" aria-label="add" className={classes.title}>
                    <NatureIcon />
                    台大樹語
                </Fab>
            </Zoom>                    
            <SpeedDials
                icon={<NatureIcon color="secondary" />}
                actions={[
                    { icon: <NatureIcon color="primary" />, name: '大王椰子' },
                    { icon: <NatureIcon color="primary" />, name: '樟樹' },
                    { icon: <NatureIcon color="primary" />, name: '白千層' },
                    { icon: <NatureIcon color="primary" />, name: '正榕' },
                    { icon: <NatureIcon color="primary" />, name: '臺灣欒樹' },
                ]}
            />
            <SpeedDials
                icon={<EcoIcon color="secondary" />}
                actions={[
                    { icon: <SpaIcon color="primary" />, name: '春天' },
                    { icon: <WbSunnyIcon color="primary" />, name: '夏天' },
                    { icon: <EcoIcon color="primary" />, name: '秋天' },
                    { icon: <AcUnitIcon color="primary" />, name: '冬天' },
                ]}
            />
            <SpeedDials
                icon={<LocationCityIcon color="secondary" />}
                actions={[
                    { icon: <SpaIcon color="primary" />, name: '春天' },
                    { icon: <WbSunnyIcon color="primary" />, name: '夏天' },
                    { icon: <EcoIcon color="primary" />, name: '秋天' },
                    { icon: <AcUnitIcon color="primary" />, name: '冬天' },
                ]}
            />
        </div>
    );
}