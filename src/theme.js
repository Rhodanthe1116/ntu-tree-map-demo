import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: yellow,
        text: {
            primary: '#424242',
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans TC"',
            '"LiHei Pro"',
            '"Heiti TC"',
            '"Microsoft JhengHei"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h3: {
            fontWeight: '500'
        }, 
        h4: {
            marginTop: '40px',
            marginBottom: '16px',
            fontWeight: '500'
        },
    },
});

export default theme