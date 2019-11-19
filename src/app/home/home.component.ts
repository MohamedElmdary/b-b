import { Component } from "@angular/core";
import { PreviousRouteTrackerService } from "../previous-route-tracker.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  constructor(
    private readonly previousRouteTrackerService: PreviousRouteTrackerService
  ) {
    console.log(this.previousRouteTrackerService.previousRoute);
    console.log(this.previousRouteTrackerService.currentRoute);
  }
}
