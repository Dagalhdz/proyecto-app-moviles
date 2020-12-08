import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Component, AfterViewInit } from "@angular/core";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  MyLocation,
  MarkerOptions,
  Marker,
} from "@ionic-native/google-maps";


@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.page.html",
  styleUrls: ["./mapa.page.scss"],
})
export class MapaPage implements AfterViewInit {

  map: GoogleMap;

  constructor(
    private googleMaps: GoogleMaps,
    private launchNvgt: LaunchNavigator,
  ) {}

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    let opcionesMapa: GoogleMapOptions = {
      controls: {
        compass: true,
        myLocationButton: true,
        zoom: true,
      },
      camera: {
        target: {
          lat: 25.685700652073553,
          lng: -100.11839528854351
        },
        zoom: 20,
      },
    };

    this.map = this.googleMaps.create('map-canvas', opcionesMapa);

    let markerOptions: MarkerOptions = {
      title: 'Audio Visual',
      animation: 'DROP',
      position: {
        lat: 25.685700652073553,
        lng: -100.11839528854351
      }
    }
    let marker = this.map.addMarker(markerOptions)
    .then((marker: Marker) => {
      marker.showInfoWindow();
    })
  }

  miUbicacion() {
    this.map.clear();
    this.map.getMyLocation()
    .then((location: MyLocation) => {
      this.map.animateCamera({
        target: location.latLng,
        zoom: 20,
        tilt: 30
      });
      let options: MarkerOptions = {
        title: 'Audio Visual',
        animation: 'DROP',
        position: {
          lat: 25.685700652073553,
          lng: -100.11839528854351
        }
      }
      let options2: MarkerOptions = {
        title: 'Aqui estoy',
        animation: 'DROP',
        position: {
          lat: location.latLng.lat,
          lng: location.latLng.lng
        }
      }
      this.map.addMarker(options);
      this.map.addMarker(options2);
      this.launchNvgt.navigate([25.685700652073553, -100.11839528854351], {
        start: [location.latLng.lat, location.latLng.lng],
      })
        .then(
          success => console.log('Launched navigator', success),
          error => console.log('Error launching navigator', error)
        );
    })
  }
}
