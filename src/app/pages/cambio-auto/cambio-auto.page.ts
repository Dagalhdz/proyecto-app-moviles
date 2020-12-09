import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cambio-auto",
  templateUrl: "./cambio-auto.page.html",
  styleUrls: ["./cambio-auto.page.scss"],
})
export class CambioAutoPage implements OnInit {
  clickedImage: string;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };

  constructor(private camera: Camera) {}

  ngOnInit() {}

  capturarImagen(){
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
    });
  }

  onEnviar(){
    console.log('Enviado');
    alert("Se han enviado correctamente");
  }
}
