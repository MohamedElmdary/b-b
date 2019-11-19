import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  // constructor(private readonly router: Router) {}
  constructor(private readonly router: Router) {
    const { state } = this.router.getCurrentNavigation().extras;
    if (!state) {
      return;
    }
    console.log("state", state);

    if (state.prev) {
      console.log("there we go");
    }
  }
  ngOnInit() {}

  /*@HostListener("window:popstate", ["$event"]) onBackButton(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.cancelBubble = true;
    console.log("success works?!");
    this.router.navigate(["/home"], {
      state: {
        prev: true,
        test: "test"
      }
    });
  }*/
}
