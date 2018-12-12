import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WorldWondersDataService } from '../world-wonders-data.service'; 
import { Location } from '../location';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private worldWondersDataService: WorldWondersDataService,
    private route: ActivatedRoute
  ) { }

  public pageContent = { 
    header: { 
        title: '', 
        strapline: '' 
    }, 
    sidebar: '' 
  };

  newLocation: Location;

  ngOnInit(): void {
    this.route.paramMap 
      .pipe(
        switchMap((params: ParamMap) => { 
          let id = params.get('locationId'); 
          return this.worldWondersDataService.getLocationById(id); 
        })
      )
      .subscribe((newLocation: Location) => { 
        this.newLocation = newLocation;
        this.pageContent.header.title = newLocation.name; 
        this.pageContent.sidebar = `${newLocation.name} is one of the wonders of the world`;
      });
  }
}
      
