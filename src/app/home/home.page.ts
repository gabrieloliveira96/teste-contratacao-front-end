import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  navigate: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    this.sideMenu();
  }

  ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
         this.user  = params
        })  
  }



sideMenu() {

  this.navigate =
    [
      {
        title: "Home",
        url: "/home",
        icon: "home"
      },
      {
        title: "Cats",
        url: "/list-cat",
        icon: "logo-octocat"
      },
      {
        title: "Dogs",
        url: "/list-dog",
        icon: "paw"
      },
    ]
}

}
