import React from "react";
import GoogleMapReact from "google-map-react";
import classes from "./UserGoogleMaps.css";

// Create a marker for the google map
const DisplayMarker = () => (
  <div>
    <div className={classes["usergooglemaps-marker"]}>
      <div className={classes["usergooglemaps-marker-circle"]} />
    </div>
    <span className={classes["usergooglemaps-beacon"]} />
  </div>
);

// Create Google Maps using google-maps-react
const UserGoogleMaps = props => {
  // Default coordiantes for the marker
  const defaultCenter = [34.0522, -118.2437];
  const zoom = 11;

  // Note: Make sure to use the client API Key
  let maps = (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyD1D48sCXtL9u3408xpchFPjVhcuviMUGY" }}
      defaultCenter={defaultCenter}
      defaultZoom={zoom}
    >
      <DisplayMarker lat={defaultCenter[0]} lng={defaultCenter[1]} />
    </GoogleMapReact>
  );

  // Checks if the array has the coordinates for google maps
  if (props.latLng) {
    // Set the strings in the array to numbers
    let lat = Number(props.latLng[0]);
    let lng = Number(props.latLng[1]);
    let gMapsArray = [lat, lng];
    // Set the new map location
    maps = (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD1D48sCXtL9u3408xpchFPjVhcuviMUGY" }}
        defaultCenter={gMapsArray}
        defaultZoom={props.zoomHeight}
      >
        <DisplayMarker lat={lat} lng={lng} />
      </GoogleMapReact>
    );
  }

  return <div className={classes["usergooglemaps-container"]}>{maps}</div>;
};

export default UserGoogleMaps;
