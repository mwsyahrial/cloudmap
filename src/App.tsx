import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-web-maps";
import data from "./data.json";

interface Region {
  latitude: number;
  longitude: number;
}

const initRegion: Region = {
  latitude: parseFloat(data[0].latitude),
  longitude: parseFloat(data[0].longitude),
};

console.log(initRegion);



const Main = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initRegion}>
        {data.map((data, i) => (
          <MapView.Marker
            key={i}
            coordinate={{ latitude: parseFloat(data.latitude), longitude: parseFloat(data.longitude)}}
            title={data.nama + "\n" +
                   "ODP : " + data.odp + "\n" +
                   "PDP : " + data.pdp + "\n" +
                   "POSITIF : " + data.positif 
                   }/>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  map: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: 1000,
  },
});

export default Main;
