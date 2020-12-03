import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Component, OnInit } from "@angular/core";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  MyLocation,
  GoogleMapsAnimation,
  LatLng,
} from "@ionic-native/google-maps";

declare var google;

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.page.html",
  styleUrls: ["./mapa.page.scss"],
})
export class MapaPage implements OnInit {
  map: GoogleMap;
  loading: any;

  constructor(
    private googleMaps: GoogleMaps,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private launchNvgt: LaunchNavigator,
  ) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    let opcionesMapa: GoogleMapOptions = {
      mapType: "MAP_TYPE_TERRAIN0",
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
    this.map = this.googleMaps.create("map-canvas", opcionesMapa);
    let marker: Marker = this.map.addMarkerSync({
      title: 'Auto Visual',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat: 25.685700652073553,
        lng: -100.11839528854351
      }
    });
    marker.showInfoWindow();
  }

  miUbicacion() {
    this.map.clear();
    this.loading = this.loadingCtrl.create({
      message: 'Espera por favor...'
    });
    this.loadingCtrl.create();
    this.map.getMyLocation()
    .then((location: MyLocation) => {
      this.loadingCtrl.dismiss();
      this.map.animateCamera({
        target: location.latLng,
        zoom: 20,
        tilt: 30
      });

      let marker: Marker = this.map.addMarkerSync({
        title: 'Estoy aqui',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      let marker2: Marker = this.map.addMarkerSync({
        title: 'Auto Visual',
        position: {
          lat: 25.685700652073553,
          lng: -100.11839528854351
        },
        animation: GoogleMapsAnimation.BOUNCE
      });
      marker.showInfoWindow();
      marker2.showInfoWindow();

      let options: LaunchNavigatorOptions = {
        start: 'London, ON',
      };
      
      this.launchNvgt.navigate([25.685700652073553, -100.11839528854351], {
        start: [location.latLng.lat, location.latLng.lng],
      })
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
    })
  }
}
