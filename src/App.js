import React, { useState, useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'

// style
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

// components 
import Box from '@material-ui/core/Box'

// my components
import TreeMap from './components/TreeMap';
import TreeAppBar from './components/TreeAppBar'
import FloatingNavgationBar from './components/FloatingNavgationBar'
import TreeDetailDrawer from './components/TreeDetailDrawer'

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

const ntuLocation = {
	center: {
		lat: 25.017319,
		lng: 121.538977
	},
	zoom: 16,
}

function App() {
	const classes = useStyles()
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [selectedTree, setSelectedTree] = useState(null)

	const [trees, setTrees] = useState([])
	const [filter, setFilter] = useState({ type: "seasonSpring", value: "on" })

	useEffect(() => {
		fetch(process.env.NODE_ENV === 'production' ? 'trees.json' : 'final/trees.json')
			.then(response => {
				if (response.ok) {
					return response.json()
				} else {
					throw new Error('get trees failed')
				}
			})
			.then((jsonResponse) => {
				let newTrees = jsonResponse.rows
				newTrees = newTrees.filter(tree => {
					if (tree[filter.type] === filter.value) {
						return true
					}
					return false
				})
				newTrees.forEach((tree) => {
					tree.lat = ntuLocation.center.lat + (Math.random() - 0.5) * 0.01
					tree.lng = ntuLocation.center.lng + (Math.random() - 0.5) * 0.01
				});
				setTrees(newTrees)
			})
			.catch(error => {
				alert(error)
			})
	}, [filter])

	function openTreeDetail(tree) {
		setDrawerOpen(true)
		setSelectedTree(tree)
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box className={classes.root}>
				{/* <TreeAppBar /> */}
				<Box className={classes.main} component="main">
					<FloatingNavgationBar
						filter={filter}
						onFilterChange={(newFilter) => setFilter(newFilter)} />
					<TreeMap
						onLearnMoreClick={openTreeDetail}
						trees={trees}
					/>
					<TreeDetailDrawer
						open={drawerOpen}
						onClose={() => setDrawerOpen(false)}
						tree={selectedTree}
					/>
				</Box>
			</Box>
		</ThemeProvider>

	)
}

export default App;
