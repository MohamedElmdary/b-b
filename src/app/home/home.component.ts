import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { pairwise, takeUntil, filter } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private static subscribtions: Subscription = null;
  constructor(private readonly router: Router) {
    if (HomeComponent.subscribtions) {
      HomeComponent.subscribtions.unsubscribe();
    }
    HomeComponent.subscribtions = this.router.events
      .pipe(
        pairwise(),
        filter(e => {
          return (
            e &&
            e.length === 2 &&
            e[0] instanceof NavigationEnd &&
            e[1] instanceof NavigationStart
          );
        })
      )
      .subscribe(([prev, next]: any) => {
        console.log("prev", prev.url, "  next ", next.url);
        this.router.navigate(["/about"], {
          state: {
            prev: true
          }
        });
      });
  }

  ngOnInit() {}

  ngOnDestroy() {}
}

/* 
constructor(private readonly router: Router) {
    this.router.events
      .pipe(
        pairwise(),
        filter(e => {
          return (
            e &&
            e.length === 2 &&
            e[0] instanceof NavigationEnd &&
            e[1] instanceof NavigationStart
          );
        })
      )
      .subscribe(([prev, next]: any) => {
        console.log("prev", prev.url, "  next ", next.url);
      });
  }


*/
