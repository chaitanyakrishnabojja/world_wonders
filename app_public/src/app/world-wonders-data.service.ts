import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location, Review } from './location';

@Injectable({
  providedIn: 'root'
})
export class WorldWondersDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = `/api`;

  public getLocations(): Promise<Location[]> {
    // Our code will go here
    const url: string = `${this.apiBaseUrl}/locations`;

    return this.http 
                  .get(url) 
                  .toPromise() 
                  .then(response => response as Location[]) 
                  .catch(this.handleError);
  }

  public getLocationById(locationId: string): Promise<Location> {
    // Our code will go here
    const url: string = `${this.apiBaseUrl}/locations/${locationId}`;

    return this.http 
                  .get(url) 
                  .toPromise() 
                  .then(response => response as Location) 
                  .catch(this.handleError);
  }


  public addReviewByLocationId(locationId: string, formData: Review): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}/reviews`;
    return this.http
                  .post(url, formData)
                  .toPromise()
                  .then(response => response as Review)
                  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> { 
    console.error('Something has gone wrong', error); 
    return Promise.reject(error.message || error); 
  }
}
