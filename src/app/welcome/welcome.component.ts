/**
 * Modify this file to fetch and display the login details
 */
import { Component, OnInit } from "@angular/core";
import { Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  user; // type this variable using user.type.ts file
  constructor(private router: Router,
    private authenticationService: AuthenticationService) {}

  ngOnInit() {
    const state: RouterState = this.router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    const token = snapshot.url.split(':')[1];
    this.user = token;
    this.authenticationService.userDetails(token).subscribe(response => {
      if (response) {
        console.log("User list:", response.data)
      }
    });
  }

  ngOnDestroy() {}
}
