import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: '345px',
        maxWidth: '100vw',
        // position: 'relative',
        // zIndex: '5000',
        // right: '170px',

    },
    media: {
        height: 140,
    },
});

function TreeInfoWindow({ tree, onLearnMoreClick }) {

    const classes = useStyles();

    function handleLearnMoreClick() {
        onLearnMoreClick(tree)
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={`https://source.unsplash.com/345x200/?tree`}
                title="tree"
            />
            <CardContent>
                <Typography variant="outline">
                    {tree.growthFrom}
                </Typography>
                <Typography gutterBottom variant="h5">
                    {tree.chineseTreeName + " " + tree.englishTreeName.split(',')[0]}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`${tree.chineseTreeName}是一種${tree.growthFrom}，樹必定會成為未來世界的新標準。 我們不得不面對一個非常尷尬的事實，那就是，領悟其中的道理也不是那麼的困難。`}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    保護我
                </Button>
                <Button
                    size="small"
                    color="primary"
                    onClick={handleLearnMoreClick}
                >
                    了解更多
                </Button>
            </CardActions>
        </Card>
    );
};

TreeInfoWindow.propTypes = {
    tree: PropTypes.shape({
        id: PropTypes.number,
        chineseTreeName: PropTypes.string,
        englishTreeName: PropTypes.string,
        scientificTreeName: PropTypes.string,
        growthFrom: PropTypes.string,
        season: PropTypes.string,
        isCommon: PropTypes.bool,
    }).isRequired,
};

TreeInfoWindow.defaultProps = {
    tree: {
        id: 0,
        chineseTreeName: '克利巴椰子',
        englishTreeName: 'Giriba Palm, Queen Palm',
        scientificTreeName: 'Syagrus romanzoffiana',
        growthFrom: '喬木',
        season: 'spring',
        isCommon: true,
    }
};
export default TreeInfoWindow