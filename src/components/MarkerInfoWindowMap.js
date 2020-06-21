import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash.isempty';

// examples:
import GoogleMap from './GoogleMap';

// component
import Drawer from '@material-ui/core/Drawer';

// my component
import TreeMarker from './TreeMarker'

const ntuLocation = {
    center: {
        lat: 25.017319,
        lng: 121.538977
    },
    zoom: 16,
}
const NTU_CENTER = [25.017319, 121.538977]

function MarkerInfoWindowMap() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('trees.json')
            .then(response => response.json())
            .then((data) => {
                data.results.forEach((result) => {
                    result.show = false; // eslint-disable-line no-param-reassign
                });
                setPlaces(data.results)
            });
    }, [])

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [selectedTree, setSelectedTree] = useState(null)

    function openTreeDetail(tree) {
        console.log(tree)
        setDrawerOpen(true)
        setSelectedTree(tree)
    }


    // onChildClick callback can take two arguments: key and childProps
    function onChildClickCallback(key) {
        const index = places.findIndex(e => e.id === key);
        let newPlaces = places
        newPlaces[index].show = !newPlaces[index].show; // eslint-disable-line no-param-reassign
        setPlaces(newPlaces)
    };

    function onChildMouseEnterCallback(key) {
        const index = places.findIndex(e => e.id === key);
        let newPlaces = places
        newPlaces[index].show = true // eslint-disable-line no-param-reassign
        console.log(newPlaces)
        setPlaces(newPlaces)
    };

    function onChildMouseLeaveCallback(key) {
        const index = places.findIndex(e => e.id === key);
        let newPlaces = places
        newPlaces[index].show = false // eslint-disable-line no-param-reassign
        console.log(newPlaces)
        setPlaces(newPlaces)
    };



    return (
        <>
            {!isEmpty(places) && (
                <GoogleMap
                    defaultZoom={ntuLocation.zoom}
                    defaultCenter={NTU_CENTER}
                >
                    {places.map(place =>
                        (<TreeMarker
                            key={place.id}
                            lat={ntuLocation.center.lat + (Math.random() - 0.5) * 0.01}
                            lng={ntuLocation.center.lng + (Math.random() - 0.5) * 0.01}
                            show={place.show}
                            tree={place}
                            onLearnMoreClick={openTreeDetail}
                        />))}
                </GoogleMap>
            )}
            <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <div>
                    {selectedTree !== null && JSON.stringify(selectedTree)}
                </div>
            </Drawer>
        </>
    );
}

export default MarkerInfoWindowMap;
