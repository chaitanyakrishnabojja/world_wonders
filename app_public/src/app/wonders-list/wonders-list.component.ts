import { Component, OnInit } from '@angular/core';
import { WorldWondersDataService } from '../world-wonders-data.service';
import { from } from 'rxjs';

export class Location {
  _id: string;
  name: string;
  address: string;
  description: string;
  rating: number;
  facilities:string[];
}

@Component({
  selector: 'app-wonders-list',
  templateUrl: './wonders-list.component.html',
  styleUrls: ['./wonders-list.component.css']
})
export class WondersListComponent implements OnInit {

  constructor(private worldWondersDataService: WorldWondersDataService) { }

  public locations: Location[];
  public message: string;

  private getLocations(): void{
    this.message = 'Searching for world wonders';
    this.worldWondersDataService
            .getLocations()
            .then(foundLocations => {
              this.message = foundLocations.length > 0 ? '' : 'No locations found';
              this.locations = foundLocations;
            });
  }

  private showError(error: any): void { 
    this.message = error.message; 
  };

  ngOnInit() {
    this.getLocations();
  }

}
