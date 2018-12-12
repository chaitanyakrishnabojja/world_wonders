import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  public pageContent = { 
    header: {
      title: 'World\'s Wonders',
      strapline: 'Find the wonder\'s of the world!'
    },
    sidebar : 'World\'s Wonders app helps you to find the wonder\'s of the world.'
  };

  ngOnInit() {
  }

}
