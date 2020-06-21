import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'

// style
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

// components 
import Box from '@material-ui/core/Box'

// my components
import MarkerInfoWindowMap from './components/MarkerInfoWindowMap';
import TreeAppBar from './components/TreeAppBar'
import FloatingNavgationBar from './components/FloatingNavgationBar'
const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100vw',
		height: '100vh',
	},
	main: {
		width: '100%',
		height: '100%',
	}
});

function App() {
	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box className={classes.root}>
				{/* <TreeAppBar /> */}
				<Box className={classes.main} component="main">
					<FloatingNavgationBar />
					<MarkerInfoWindowMap />
					
				</Box>
			</Box>
		</ThemeProvider>

	)
}

export default App;
