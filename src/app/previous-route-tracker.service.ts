import { Injectable } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PreviousRouteTrackerService {
  private _currentRoutes: string = this.router.url;
  private _previousRoute: string = null;

  get previousRoute() {
    return this._previousRoute;
  }

  get currentRoute() {
    return this._currentRoutes;
  }

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((res: NavigationStart) => {
        this._previousRoute = this._currentRoutes;
        this._currentRoutes = res.url;
      });
  }
}
