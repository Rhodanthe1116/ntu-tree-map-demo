import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// my components
import SpeedDials from './SpeedDials'

const useStyles = makeStyles((theme) => ({
    detail: {
        marginTop: theme.spacing(2),
        width: 400,
    },
    media: {
        paddingBottom: 225,
        height: 225,

    },
    divider: {
        marginBottom: theme.spacing(2),
    },


}));

export default function TreeDetail({ tree }) {
    const classes = useStyles();

    return (
        <>
            <Carousel
                width="400px"
                height="225px"
                showStatus={false}
                showThumbs={false}
            >
                <CardMedia
                    className={classes.media}
                    image={`https://source.unsplash.com/345x200/?tree?${tree.id + 1}`}
                    title={tree.chineseTreeName}
                />
                <CardMedia
                    className={classes.media}
                    image={`https://source.unsplash.com/345x200/?tree?${tree.id + 2}`}
                    title={tree.chineseTreeName}
                />
                <CardMedia
                    className={classes.media}
                    image={`https://source.unsplash.com/345x200/?tree?${tree.id + 3}`}
                    title={tree.chineseTreeName}
                />
            </Carousel>

            <Container
                className={classes.detail}
                role="presentation"
            >
                <Typography gutterBottom variant="h5">
                    {tree.chineseTreeName + " " + tree.englishTreeName.split(',')[0]}
                </Typography>

                <Typography variant="body2" color="textSecondary" paragraph>
                    {`${tree.chineseTreeName}是一種${tree.growthFrom}，樹必定會成為未來世界的新標準。 我們不得不面對一個非常尷尬的事實，那就是，領悟其中的道理也不是那麼的困難。`}
                </Typography>
                
                <Divider className={classes.divider} />

                <Typography variant="subtitle2">
                    樹木資訊
                    </Typography>
                <List dense aria-label="tree-detail">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={treePlaceholder.co} />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={`調查時間：${treePlaceholder.createTime}`}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={`樹高：${treePlaceholder.treeHeight}`}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={`樹冠幅：${treePlaceholder.treeCrownHeight}`}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={`胸徑：${treePlaceholder.treePath}`}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={`周長：${treePlaceholder.treePerimeter}`}
                        />
                    </ListItem>
                </List>

                <Divider className={classes.divider} />

                <Typography variant="subtitle2">
                    樹種小百科
                </Typography>
                <List aria-label="tree-catagory-info">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={tree.growthFrom}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="英文名"
                            secondary={tree.englishTreeName}
                        />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="學名"
                            secondary={tree.scientificTreeName}
                        />
                    </ListItem>
                </List>



            </Container>
        </>
    );
}




const treePlaceholder = {
    id: 0,
    chineseTreeName: '克利巴椰子',
    englishTreeName: 'Giriba Palm, Queen Palm',
    scientificTreeName: 'Syagrus romanzoffiana',
    growthFrom: '喬木',
    season: 'spring',
    isCommon: true,
    co: "N 1-10_0205",
    createTime: "2012-05-06T02:23:11.000Z",
    treeHeight: "11.24",
    treeCrownHeight: "11.4728",
    treePath: "29.921",
    treePerimeter: "94",
}
