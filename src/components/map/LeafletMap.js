import React, { Fragment, useState } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import { Map as LeafletMap, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import WorldData from 'world-map-geojson';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import { GeoJsonMapDemo,BasicDemo,AnimateMap,AnimatePanning,SetMarkerWithPopup } from "../../constant";
const LeafletMapComp = () => {
    const [animate, setAnimate] = useState(false);
    const [latlan, setlatlan] = useState({
        lat: 51.505,
        lng: -0.09,
    });

    const markers = [
        { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
        { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
        { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
    ]

    const handleClick = (e) => {
        setlatlan({
            latlng: e.latlng,
        })
    }

    const toggleAnimate = () => {
        setAnimate({
            animate: !animate,
        })
    }

    const MyPopupMarker = ({ content, position }) => (
        <Marker position={position}>
            <Popup>{content}</Popup>
        </Marker>
    )

    const MyMarkersList = ({ markers }) => {
        const items = markers.map(({ key, ...props }) => (
            <MyPopupMarker key={key} {...props} />
        ))
        return <Fragment>{items}</Fragment>
    }
    return (
        <Fragment>
            <BreadCrumb parent="Home" subparent="Maps" title="Leaflet Maps"/>
            <Container fluid={true}>
            <Row>
                    <Col xl="6" md="12">
                        <Card>
                            <CardHeader>
                                <h5>{BasicDemo}</h5>
                            </CardHeader>
                            <CardBody>
                                <div id="gmap-simple" >
                                    <LeafletMap
                                        center={[50, 10]}
                                        zoom={6}
                                        maxZoom={10}
                                        attributionControl={true}
                                        zoomControl={true}
                                        doubleClickZoom={true}
                                        scrollWheelZoom={true}
                                        dragging={true}
                                        animate={true}
                                        easeLinearity={0.35}
                                    >
                                        <TileLayer
                                            
                                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                        />
                                        <Marker position={[50, 10]}>
                                            <Popup>
                                                {"Popup for any custom information."}
                                        </Popup>
                                        </Marker>
                                    </LeafletMap>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6" md="12">
                        <Card>
                            <CardHeader>
                                <h5>{GeoJsonMapDemo}</h5>
                            </CardHeader>
                            <CardBody>
                                <div id="gmap-simple" >
                                    <LeafletMap
                                        center={[50, 10]}
                                        zoom={6}
                                        maxZoom={10}
                                        attributionControl={true}
                                        zoomControl={true}
                                        doubleClickZoom={true}
                                        scrollWheelZoom={true}
                                        dragging={true}
                                        animate={true}
                                        easeLinearity={0.35}
                                    >
                                        <GeoJSON
                                            data={WorldData}
                                            style={() => ({
                                                color: '#4a83ec',
                                                weight: 0.5,
                                                fillColor: "#1a1d62",
                                                fillOpacity: 1,
                                            })}
                                        />
                                        <Marker position={[50, 10]}>
                                            <Popup>
                                                {"Popup for any custom information."}
                                                </Popup>
                                        </Marker>
                                    </LeafletMap>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6" md="12">
                        <Card>
                            <CardHeader>
                                <h5>{AnimateMap}</h5>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <label htmlFor="checkIt" className="mb-3">
                                        <input
                                            checked={animate}
                                            onChange={toggleAnimate}
                                            type="checkbox"
                                            id="checkIt"
                                            className="checkbox_animated"
                                        />
                                        {AnimatePanning}
                                        </label>
                                    <LeafletMap
                                        animate={animate}
                                        center={latlan}
                                        length={4}
                                        onClick={handleClick}
                                        zoom={13}>
                                        <TileLayer
                                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                    </LeafletMap>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="6" md="12">
                        <Card>
                            <CardHeader>
                                <h5>{SetMarkerWithPopup}</h5>
                            </CardHeader>
                            <CardBody>
                                <LeafletMap
                                     center={[51.505, -0.09]} 
                                     zoom={13}>
                                    <TileLayer
                                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <MyMarkersList markers={markers} />
                                </LeafletMap>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default LeafletMapComp;