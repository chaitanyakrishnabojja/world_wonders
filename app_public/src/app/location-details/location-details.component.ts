import { Component, OnInit, Input } from '@angular/core';
import { Location, Review } from '../location';
import { WorldWondersDataService } from '../world-wonders-data.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  constructor(private worldWondersDataService: WorldWondersDataService) { }

  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };
  public formVisible: boolean = false;
  public formError: string;

  private formIsValid(): boolean { 
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideReviewForm(): void { 
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  public onReviewSubmit(): void {
    this.formError = ''; 
    if (this.formIsValid()) { 
        console.log(this.newReview); 
        this.worldWondersDataService.addReviewByLocationId(this.location._id, this.newReview)
              .then((review: Review) => {
                console.log("Review Saved successfully", review);
                this.location.reviews.unshift(review); 
                this.resetAndHideReviewForm();
              });
    } else { 
        this.formError = 'All fields required, please try again'; 
    }
  }

  ngOnInit() {
  }

}
