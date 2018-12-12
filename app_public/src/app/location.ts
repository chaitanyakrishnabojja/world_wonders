export class Review { 
    author: string;
    rating: number;
    reviewText: string;
}


export class Location {
    _id: string;
    name: string;
    address: string;
    description: string;
    rating: number;
    facilities:string[];
    reviews: Review[];
}
