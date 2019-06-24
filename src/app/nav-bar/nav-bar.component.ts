import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.formatSearchButton();
  }

  formatSearchButton() {
    let searchButton = <HTMLImageElement>document.getElementById('searchImg');
    searchButton.addEventListener('mouseenter', (event) => {
      searchButton.src = "../assets/searchOrange.png";
    });
    searchButton.addEventListener('mouseleave', (event) => {
      searchButton.src = "../assets/search.png";
    });
  }

  navLinkClicked() {
  }

}
