import { SegmentChangeEventDetail } from "@ionic/core";
import { AutosService } from "./../../services/autos.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Auto } from "../../interfaces/auto.model";

@Component({
  selector: "app-info-autos",
  templateUrl: "./info-autos.page.html",
  styleUrls: ["./info-autos.page.scss"],
})
export class InfoAutosPage implements OnInit {
  auto: Auto;
  info: string[] = [];

  constructor(
    private _autoService: AutosService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params["id"] - 1);
      this.auto = this._autoService.getAuto(params["id"] - 1);
      // console.log(this.auto);
    });
  }
  ngOnInit() {
    this.info = [
      this.auto.imgInterior1,
      this.auto.imgInterior2,
      this.auto.infoInterior,
    ];
    // console.log(this.info);
  }

  onFilter(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === "interior") {
      this.info = [
        this.auto.imgInterior1,
        this.auto.imgInterior2,
        this.auto.infoInterior,
      ];
    } else {
      this.info = [
        this.auto.imgExterior1,
        this.auto.imgExterior2,
        this.auto.infoExterior,
      ];
    }
  }
}
